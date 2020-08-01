import Wishes from './components/Wishes.vue'
import Memories from './components/Memories.vue'
import Surprise from './components/Surprise.vue'
import About from './components/About.vue'
import Surprise1 from './components/Surprise1.vue'
import RSurprise from './components/RSurprise.vue'

export const routes=[
    {path:'/wishes',component:Wishes},
    {path:'/surprise',component:Surprise},
    {path:'/memories',component:Memories},
    {path:'/about',component:About},
    {path:'/surprise1',component:Surprise1},
    {path:'/HappyBirthDaySnehu',component:RSurprise},
    {path:'',component:About}
]