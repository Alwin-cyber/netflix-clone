export const topPopularity = (data) => {
    
    for(let i = 0 ; i < data.length ; i++)
    {
        let max = i;

        for(let j = i+1 ; j < data.length ; j++)
        {
            if(data[i].popularity < data[j].popularity)
            {
                max = j;
            }
        }

        let temp = data[i];
        data[i] = data[max];
        data[max] = temp;
    }
    Print(data);
    return data;
}

const Print = (data) => {

    for(let i = 0 ; i < data.length ; i++)
    {
        console.log(data[i].popularity);
    }
}