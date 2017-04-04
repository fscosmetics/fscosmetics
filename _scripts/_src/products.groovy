@Grapes( @Grab('com.xlson.groovycsv:groovycsv:1.0') )
import com.xlson.groovycsv.*
@Grapes( @Grab('com.xlson.groovycsv:groovycsv:1.0') )
import com.xlson.groovycsv.*

import java.text.Normalizer
import java.text.Normalizer.Form
import java.util.regex.Pattern

String csvFilePath = 'fs.csv'

println "Scraping ${csvFilePath}..."

File csvFile = new File(csvFilePath)
def data = new CsvParser().parse(new FileReader(csvFile))
List products
List productList = []

data.each { row ->
    Map product = [:]
    row.columns.each{ key, value ->
        product[key] = row[key]
    }
    productList << product
}

productList.groupBy { it.id }.each {
    String productName = it.value.find { it.product_name }.product_name
    String description = it.value.find { it.product_name }.description
    String images = it.value.find { it.product_name }.images
    it.value.each {
        it.product_name = productName
        it.description = description
        it.category = it.category.toLowerCase()
        it.images = images
    }
}

productList = productList.groupBy {
    it.subMap("id", "product_name", "images", "description", "category", "net_weight_grams")
}.collect {
    it.key + [colors: it.value*.subMap(["color_name", "color_hex", "best_seller"])]
}


'mkdir -p out'.execute()
productList.groupBy {it.category}.each {
    "mkdir -p out/$it.key".execute()
}
productList.eachWithIndex { product, index ->
    "mkdir -p out/$product.category".execute()
    File file = new File("out/$product.category/" + slugify(product.product_name) +'.md')
    println "out/$product.category/" + slugify(product.product_name) +'.md'
    file.write ('---\n')

    file << "title: \"$product.product_name\"\n"
    file << "layout: product\n"
    file << "categories: [\"$product.category\"]\n"
    file << "feature_image: \"https://res.cloudinary.com/ruel/image/upload/v1438575069/fs/" + (product.images.replaceAll(" ", "_").split("\\|").first() ?:"no-image.jpg") + "\"\n"
    file << "colors:\n"
    product.colors.each{
        file << "    - color_name: $it.color_name\n"
        file << "      hex: \"$it.color_hex\"\n"
        file << "      best_seller: \"$it.best_seller\"\n"
    }

    file << '---' << '\n'
    file << product.description
}

public String slugify (String toBeSlugged){
    Pattern NONLATIN = Pattern.compile("[^\\w-]")
    Pattern WHITESPACE = Pattern.compile("[\\s]")

    String nowhitespace = WHITESPACE.matcher(toBeSlugged.replaceAll(" - ", " ")).replaceAll("-")
    String normalized = Normalizer.normalize(nowhitespace, Form.NFD)
    String slug = NONLATIN.matcher(normalized).replaceAll("")
    return slug.toLowerCase(Locale.ENGLISH)
}
