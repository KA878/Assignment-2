function groupByAge(arr) {
    const overTheAgeOf = arr.filter(person => {
        let result = [{}]
        if (person.age <= 20) {
            result['20 and younger'] = [{name: person.name, 
                                         age: person.age}]
        }
        else if (person.age > 20 && person.age <= 30) {
            result['21-30'] = [{name: person.name, 
                                       age :person.age}]
        }
        else if (person.age > 30 && person.age <= 40) {
            result['31-40'] = [{name: person.name, 
                                age: person.age}]
        }
        else if (person.age > 40 && person.age <= 50) {
            result['41-50'] = [{name: person.name, 
                                age: person.age}]
        }
        else if (person.age > 50) {
            result['51 and older'] = [{name: person.name,
                                       age: person.age}]
        }
        return overTheAgeOf(arr)
    })
    
}