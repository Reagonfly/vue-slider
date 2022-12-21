
const {
    createApp
} = Vue;

// Array di immagini
createApp( {
    data(){
        return{ 
            autoplay: null,
            activeImage: 0,
            slides:[
                    {
                        image: 'https://www.warhammer-community.com/wp-content/uploads/2020/09/zAbRIMcrxeHeo21k.jpg',
                        title: 'Space Marines',
                        text: 'Space Marines are the greatest heroes of humanity, gifted with powerfoul weapons and heavy armours. Noble and Proud, they fight with courage and honor, protecting Humanity from countless dengers of the Galaxy.',
                    }, 
                    {
                        image: 'https://static.wikia.nocookie.net/incantesimibellibelli/images/8/81/Bd31e01ab30a68c93998f4b7f4ee4305.jpg/revision/latest?cb=20210425163847&path-prefix=it',
                        title: 'Eldar',
                        text: 'The Aeldari or the Eldar as they were long known to outsiders, are an ancient and highly advanced species of humanoid xenos whose vast empire once extended the width and breadth of the known galaxy. ',
                    }, 
                    {
                        image: 'https://www.minianetstore.it/img/cms/Warhammer%2040K/JBj9JILMWLEfEfWX.jpg',
                        title: 'Chaos Marines',
                        text: "Chaos Space Marines, also sometimes called Traitor Marines, Renegade Marines, or Heretic Astartes, are former Space Marines of the Imperium of Man who have chosen to abandon the service of the Emperor of Mankind and dedicate themselves to Chaos to achieve their own ends. ",
                    }, 
                    {
                        image: 'https://cdn-prod.scalefast.com/public/assets/img/resized/wizardsofthecoast-secret-lair/f6765ca315876e0a493ed11e29c971b0_1920_KR.png',
                        title: 'Orkz',
                        text: 'The Orks, also called greenskins, are a savage, warlike, green-skinned species of humanoids who possess physiological features of both animals and fungi who are spread all across the Milky Way Galaxy.',
                    }, 
                    {
                        image: 'https://www.warhammer-community.com/wp-content/uploads/2020/06/Pb05YqhZ54uKA5cW.jpg',
                        title: "Ta'u",
                        text: 'The Tau claim to be a peaceful species when possible, asking if others will join their cause voluntarily instead of fighting against them. However, if their peaceful overtures are refused, the Tau may well decide to conquer a planet and add it to their growing interstellar empire for the Greater Good.',
                    },
                    ],
        }
    },

    created(){
        this.Autoplay();
    },

    // Click sulle thumbnails e frecce e funzione autoplay
    methods: {
        changeImage(currentIndex)
        {
            this.activeImage = currentIndex;
        },
        
        next()
        {
            this.activeImage++;
            if(this.activeImage > this.slides.length -1){
                this.activeImage = 0;
            }
        },

        prev()
        {
            this.activeImage--;
            if(this.activeImage < 0){
                this.activeImage = this.slides.length - 1;
            }
        },

        Autoplay()
        {
            this.autoplay = setInterval(() =>{
                this.next()
            },3000)
        },

        stopAutoplay()
        {
                clearInterval(this.autoplay);
                this.autoplay = null;
        }
    }

}).mount('#app')