export const request = async (url) => {
    let response = await fetch(url, {
        method: 'GET',
        body: null,
        headers: {
            'Content-Type': 'application/json'
          },
    });

    if (!response.ok) {
        throw new Error(`This url ${url} throw error: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

const _doShortName = (array) => {
    array.forEach(item => {
       item.name = item.name.length > 18 ? `${item.name.slice(0, 15)}...` : item.name;
    })
    return array;
};

export default _doShortName;