export const getData = async (limit, selectedPage, filter = null) => {
    let data = {
        filter: false,
        limit: limit,
        selectedPage: selectedPage
    }
    if(filter){
        data = {
            filter: true,
            limit: limit,
            selectedPage: selectedPage,
            incomeLessThan: filter.incomeLessThan,
            carBrands: filter.carBrands,
            gender: filter.gender,
            phonePriceGreaterThan: filter.phonePriceGreaterThan,
            lastNameStartWith: filter.lastNameStartWith,
            quoteLengthGreaterThan: filter.quoteLengthGreaterThan,
            emailIncludeDigits: filter.emailIncludeDigits,
        }

    }

    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/get-data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return result.json();
};