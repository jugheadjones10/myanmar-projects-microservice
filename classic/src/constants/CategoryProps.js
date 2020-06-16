export const CategoryProps = {
    "Necessities": {
        color: "#F94144",
        categories: {
            "Water Well": "#F3722C",
            "GVH": "#577590"
        }
    },
    "Education": {
        color: "#F9C74F",
        categories: {
            "Education Camp": "#F8961E",
        }
    },
    "Sustainability": {
        color: "#90BE6D",   
        categories: {
            "School Improvement": "#43AA8B"
        }
    }
}

function getCategoryColor(category){
    var CategoryColors = {}
    Object.values(CategoryProps).map(value =>
        Object.keys(value.categories).forEach(cat => CategoryColors[cat] = value.categories[cat])
    )
    return CategoryColors[category]
}
export { getCategoryColor } 


function getParentCategory(category){
    var parent = Object.keys(CategoryProps).filter(parentCat => Object.keys(CategoryProps[parentCat].categories).includes(category))
    return { parentCat: parent, color: CategoryProps[parent].color }
}
export { getParentCategory } 