import React from 'react'
import '../Stylesheet/Articles_component.css'
import Cardslider from '../Components/Cardslider'

function Articles_component() {

    const card1=()=>{window.open('https://www.strengthlog.com/trapezius-exercises/')}
    const card2=()=>{window.open('https://www.strengthlog.com/how-to-train-for-a-healthy-body/')}
    const card3=()=>{window.open('https://www.health.harvard.edu/exercise-and-fitness/two-workout-strategies-that-reduce-cardiovascular-disease-risk')}
    const card4=()=>{window.open('https://www.everydayhealth.com/fitness/tips-for-exercising-when-youre-not-in-the-mood-to-work-out/')}
    const card5=()=>{window.open('https://kidshealth.org/en/teens/exercise-wise.html')}
    const card6=()=>{window.open('https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise-and-chronic-disease/art-20046049')}
    const card7=()=>{window.open('https://www.cdc.gov/chronicdisease/resources/infographic/physical-activity.htm')}
    const card8=()=>{window.open('https://www.azumio.com/blog/fitness/does-age-matters#:~:text=The%20message%20here%20is%20clear,maintaining%20good%20bones%20and%20health.')}
    const card9=()=>{window.open('https://www.keckmedicine.org/blog/what-happens-to-your-body-when-you-take-a-puff-of-a-cigarette/')}
    // const card10=()=>{window.open('https://www.strengthlog.com/trapezius-exercises/')}
    

    const slides = [
        {image:"https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/03/trapezius-exercises-scaled.jpg?resize=2048%2C1408&ssl=1",
        title:"Exercises for muscle & strength",
        description:"looking for trapezius exercises",
        clickEvent:card1},

        {image:"https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/03/how-to-train-for-health-scaled.jpg?resize=2048%2C1060&ssl=1",
        title:"How to Train for a Healthy Body",
        description:"how to train for maximum strength",
        clickEvent:card2},

        {image:"https://domf5oio6qrcr.cloudfront.net/medialibrary/15042/8acb5578-6ac9-4b73-8a37-f3f608a97a03.jpg",
        title:"Reduce cardiovascular disease risk",
        description:"kind that works your heart and lungs",
        clickEvent:card3},

        {image:"https://images.everydayhealth.com/images/healthy-living/fitness/tips-for-exercise-not-in-the-mood-1440x810.jpg?sfvrsn=73b7e74e_3",
        title:"Tips for Exercising When You’re Not in the Mood",
        description:"You’re too tired. It’s too cold outside.",
        clickEvent:card4},

        {image:"https://yourteenmag.com/wp-content/uploads/2018/06/boys-gym-fitness-health-friends-1135x540.jpg.webp",
        title:"Why Exercise Is Wise for teens",
        description:"how exercise is good for you.",
        clickEvent:card5},

        {image:"https://www.health-total.com/wp-content/uploads/2019/12/am-article-2-nov-scalia-gallery-fullwidth.jpg",
        title:"Exercise and chronic disease: Get the facts",
        description:"might have questions about exercising",
        clickEvent:card6},

        {image:"https://www.brainsway.com/wp-content/uploads/2022/05/chronic-illnesses-and-mental-health.jpg",
        title:"Physical Activity Helps Prevent Chronic Diseases",
        description:"Regular physical activity helps improve your overall health",
        clickEvent:card7},

        {image:"https://lh3.googleusercontent.com/KkTxa41R0Me0MxjxG3uuXs5VPLUIozFJHRvco12t-nEFWJY43654tr1QZUv2OlN-UJ3nbE4WSkOsXTnFyqEB=s800",
        title:"DOES AGE REALLY MATTER?",
        description:"Age is not just a number when it comes to exercise",
        clickEvent:card8},

        {image:"https://www.keckmedicine.org/wp-content/uploads/2021/11/woman-is-smoking-a-cigarette-for-the-first-time-and-is-discovering-what-happens-to-her-body.jpg.webp",
        title:"effects of smoking just 1 cigarette?",
        description:"Smoking continues to be the primary cause",
        clickEvent:card9},
    ]
  return (
    <>
    <div className="article_main" id='#articles'>

    <div className="artheading">
    <h1>Articles</h1>
    <p>Increase Your Knowledge</p> 
    </div>

    <div className="articleview">

    <Cardslider slides={slides}/>

    </div>
    </div>
    </>
  );
}

export default Articles_component
