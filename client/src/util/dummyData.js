import img1 from '../assets/estate.jpg'
import img2 from '../assets/estate2.jpg'
import img3 from '../assets/estate3.jpg'
import img4 from '../assets/estate4.jpg'

export const properties = [
    {
        img: img1,
        _id: crypto.randomUUID(),
        type: 'BEACH',
        price: 150000,
        sqft: 2000,
        desc: 'Best property in Australia',
        beds: 2,
        currentOwner: '63e52a4cc0ca227a26de5161',
        continent: 'Oceania',
    },
    {
        img: img2,
        _id: crypto.randomUUID(),
        type: 'MOUNTAIN',
        price: 250000,
        sqft: 2500,
        desc: 'Best property in Brazil',
        beds: 2,
        currentOwner: '63e52a4cc0ca227a26de5161',
        continent: 'South America',
    },
    {
        img: img3,
        _id: crypto.randomUUID(),
        type: 'VILLAGE',
        price: 500000,
        sqft: 6000,
        desc: 'Best property in Serbia',
        beds: 5,
        currentOwner: '63e52a4cc0ca227a26de5161',
        continent: 'Europe',
    },
    {
        img: img4,
        _id: crypto.randomUUID(),
        type: 'MOUNTAIN',
        price: 175000,
        sqft: 4000,
        desc: 'Best property in India',
        beds: 3,
        currentOwner: '63e52a4cc0ca227a26de5161',
        continent: 'Asia',
    },
]
