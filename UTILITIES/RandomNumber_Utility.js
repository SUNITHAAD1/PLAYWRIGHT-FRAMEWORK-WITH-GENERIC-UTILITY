

export default class RandomNumber_Utility 
{
        async  generating_random_number()
         {
        let random_number=Math.floor(Math.random() * 1000) + 1
            return random_number 
        }
}