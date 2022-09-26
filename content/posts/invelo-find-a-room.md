---
title: "Invelo ~ Find a room"
date: 2022-04-11
cover-image-large: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657623200/large_Invelo_e1f042a5ee.png"
cover-image-small: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657623202/small_Invelo_e1f042a5ee.png"

tags: ["Web development", "Backend", "UI/UX"]
---

# Before starting

It’s been long since I have just realized that making an app that solves an enormous problem and changing the world is not a simple task. So, I decided to start small then started jumping on every minor problem that I face in my day and try to engineer a solution. I write it down, code it or marvel about it for days till I face the next problem. How can I solve humanity problems if I can’t just solve my own !

I would like to write a lengthy post about the benefits that I had since I adopted that spirit but first let me present this app, which came from a very simple problem.


# Hey, What was the simple problem ?

In my university, despite having schedules, things can get really messy. We have a study hall that can fit around 600 students. Sounds huge, right?** We are actually 2000 students** and just weeks before the exams, finding a place to just stand there becomes really problematic. One day, I was talking with my friend and I proposed the app just as a stupid idea. But he really liked , it was a cool way to show off our skills and learn more.

# Design Process

The app was intended for **“rush use”**. we don’t expect the user to just stay on the screen for more than 5 minutes to find an open classroom or, in worst cases, write a long message describing a problem. That’s why I wanted to give a calm, sleek look, a combination of modern colors and a quick escape from the quick flow of life.

It took me a lot of iterations and studying to find the perfect combinations of peaceful cyan and attracting pink, easing it down with dark blue.



![Design iterations](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657622736/Invelo_iterations_63c7d69e66.png)

## Colors

Here is the final set of our colors. As we see, it’s the 10,30,60 rule here. The pink is our special; the cyan is our secondary and the dark blue is our primary.


![App colors](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657622735/small_Invelo_colors_906fe55e0c.png)


## Typography

**Airelon** was my font here, really cool font. Changing the weights of the font is enough to give it another feel. I did really enjoy using it. One thing I didn’t like the “L” is as big as the “i” in the bold weight.



![Typography](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657622735/Invelo_typography_29478ef87a.png)


## Design

I found a challenge to design the university room’s plan. **How can I give the users a wide view so he knows where to look? Also, how can I not lose the relation with the actual location of classes IRL ?** It was hard, and it’s the part on which I spent most of the time on. I came up with a simple solution, as you can see below. But the question here is how can I improve it or is there a better one ?

![Invelo Screens](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657622742/Invelo_screens_9622a3e413.png)
![Invelo Screens](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657623479/second_image_35bf04eea9.png)

-------------

# Development


>**By failing to prepare, you are preparing to fail**


― _Benjamin Franklin_


----------------------

### System Design

The missing piece, or let me say the part that I was doing in a messy way, filled with intuition, common practices following and reading big known repos.

  Planning ahead and planning everything was my first approach, I didn’t want it to be iterative at first becauseI had enough experience in the “coding process” that I can speculate how things will turn out and how they will be implemented. So I started designing the architecture of the app from the bare grounds, drawing UML diagrams.


### How did that help ?

- I found ways to optimize the app. The classrooms can all be fetched and cached. The user will only have to receive the schedule and then map it to the **id** of the room.

- The possibilities for the times in which classes can be announced as full are not infinite. All schedules respect the same planning but with different lectures/classrooms. It’s 6 sessions a day 1h30m each ( 8:00 to 9:30 , 9:45 to 11:15 etc). So why duplicating it ? I concluded that Time can be cached too for this app.



#### So it came up to this

1. So we only fetch the timetable / planning on opening the app.


2. We use Websockets to listen for changes.


![Invelo Classes](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1657623602/invelo_uml_9e9fc53c50.png)



### Development Stack :

- **Flutter** : Client

- **NestJS** : Backend with websockets and Postgres for the DB.


## Conclusion

I had a lot of fun working on this project. Doing what I like on such a comfortable pace. I want to thank my professor for the encouragement and support and my dear friend Omar for being the cool flutter guy and the one that listens to my crazy ideas.

If you have any advises or questions, I am all ears reach for me on my email **yassine.belkhadem@insat.ucar.tn**

