import NormalBall from '../assets/Images/Pokeballs/PokeBall.png'
import SuperBall from '../assets/Images/Pokeballs/SuperBall.png'
import UltraBall from '../assets/Images/Pokeballs/UltraBall.png'
import MasterBall from '../assets/Images/Pokeballs/MasterBall.png'

import Awakening from '../assets/Images/Heal/Awakening.png'
import BurnHeal from '../assets/Images/Heal/BurnHeal.png'
import FullHeal from '../assets/Images/Heal/FullHeal.png'
import IceHeal from '../assets/Images/Heal/IceHeal.png'
import ParalizeHeal from '../assets/Images/Heal/ParalizeHeal.png'

import Potion from '../assets/Images/Potions/potion.png'
import HiperPotion from '../assets/Images/Potions/hyper-potion.png'
import SuperPotion from '../assets/Images/Potions/super-potion.png'

export const PRECIOS = [
    {
        id : 1,
        category: "pokeball",
        image : NormalBall,
        title: "NormalBall",
        price: 200
    },
    {
        id : 2,
        category: "pokeball",
        image : SuperBall,
        title: "SuperBall",
        price: 600
    },
    {
        id : 3,
        category: "pokeball",
        image : UltraBall,
        title:"UltraBall",
        price: 1200
    },
    {
        id : 4,
        category: "pokeball",
        image : MasterBall,
        title: "MasterBall",
        price: 200
    },
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
        id : 5,
        category: "antidote",
        image : ParalizeHeal,
        title: "ParalizeHeal",
        price: 200
    },
    {
        id : 6,
        category: "antidote",
        image : BurnHeal,
        title: "BurnHeal",
        price: 250
    },
    {
        id : 7,
        category: "antidote",
        image : IceHeal,
        title: "IceHeal",
        price: 250
    },
    {
        id : 8,
        category: "antidote",
        image : Awakening,
        title: "Awakening",
        price: 250
    },
    {
        id : 9,
        category: "antidote",
        image : FullHeal,
        title: "FullHeal",
        price: 600
    },
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    {
        id : 10,
        category: "potions",
        image : Potion,
        title: "Potion",
        price: 300
    },
    {
        id : 11,
        category: "potions",
        image : SuperPotion,
        title: "SuperPotion",
        price: 700
    },
    {
        id : 12,
        category: "potions",
        image : HiperPotion,
        title: "HiperPotion",
        price: 1200
    },
]