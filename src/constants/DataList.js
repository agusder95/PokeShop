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


export const PRECIOS = {
     "pokeball": [
          {
                id : 0,
                image : NormalBall,
                title: "NormalBall",
                price: 200
          },
          {
                id : 1,
                image : SuperBall,
                title: "SuperBall",
                price: 600
           },
          {
                id : 2,
                image : UltraBall,
                title:"UltraBall",
                price: 1200
           },
           {
                id : 3,
                image : MasterBall,
                title: "MasterBall",
                price: 200
           },
           {
                id : 4,
                image : NormalBall,
                title: "NormalBall",
                price: 200
            },
            {
                id : 5,
                image : SuperBall,
                title: "SuperBall",
                price: 600
            },
            {
                id : 6,
                image : UltraBall,
                title:"UltraBall",
                price: 1200
            },
            {
                id : 7,
                image : MasterBall,
                title:"MasterBall",
                price: 200
            },
     ],
     "antidote": [
          {
               id : 0,
               image : ParalizeHeal,
               title: "ParalizeHeal",
               price: 200
           },
           {
               id : 1,
               image : BurnHeal,
               title: "BurnHeal",
               price: 250
           },
           {
               id : 2,
               image : IceHeal,
               title: "IceHeal",
               price: 250
           },
           {
               id : 3,
               image : Awakening,
               title: "Awakening",
               price: 250
           },
           {
               id : 4,
               image : FullHeal,
               title: "FullHeal",
               price: 600
           },
     ],
     "potions": [
          {
               id : 0,
               image : Potion,
               title: "Potion",
               price: 300
           },
           {
               id : 1,
               image : SuperPotion,
               title: "SuperPotion",
               price: 700
           },
           {
               id : 2,
               image : HiperPotion,
               title: "HiperPotion",
               price: 1200
           },
     ]
}