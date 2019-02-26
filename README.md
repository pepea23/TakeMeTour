### TakeMeTour Internship Program 2019

Hi all applicants! Welcome to TakeMeTour Internship Program 2019. Being an intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of a great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be written in Javascript language. The code will be tested with Node8, so you can use all Javascript features that are available in Node8.

1. Write a function that shifts the elements of array to left or right by n elements in an infinite loop. the function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 3rd is the number of elements which will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```
*You can also see result in page /array*

 shift = (arg,method,num)=>{
    if(method==='left'){
         for (let index = 0; index < num; index++) {
            let temp = arg.shift()
             arg.push(temp)
        }
    }else if(method ==='right'){
        for (let index = 0; index < num; index++) {
            let temp = arg.pop()
            arg.unshift(temp)
        }
    }
    console.log(arg)
  }

```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2019/blob/master/hero.json) and write a code to calculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```
*You can also see result in page /hero*

2.1 networthAvgs = ()=>{
let avg=0;
 Heros.map(data=>{
   avg+=data.networth
 })
 avg/=Heros.length
return avg.toFixed(2)
}
-------------------------------
2.2 heroAttributeAvgs=(att)=>{
  let avg=0;
  Heros.map(data=>{
    if(data.primary_attribute===att)
    avg+=data.level
  })
  avg/=Heros.length
 return avg.toFixed(2)
}
-------------------------------
2.3 findAssist(){
    let bestAssit={
    name:'No one',
    assist:0
    }
    Heros.map(data=>{
    if (data.assist > bestAssit.assist) {
      bestAssit.name=data.name
      bestAssit.assist=data.assist
    }
})
return bestAssit.name
}
2.4 findwrostRatio(){
    let wrostRatio={
        name:'No one',
        ratio:Infinity
     }
    Heros.map(data=>{
      if (data.ratio < wrostRatio.ratio) {
        wrostRatio.name=data.name
        wrostRatio.ratio=data.ratio
      }
  })
  return wrostRatio.name
}
```

## Simple Web Application: A joke from Chuck Norris.

This part of the quest will be a challenging one. You are going to make a simple web application which allows users to get some jokes from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users have options to change the number of the resulting jokes, user's first name and last name
- UI Design: as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework are allowed.
- Using tools & framework which are the same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: <
GraphQL ช่วยลดจำนวน APIs endpoint ลงไป ช่วยทำให้ผู้ใช้งานสะดวกยิ่งขึ้น ช่วยลดข้อมูลที่ไม่จำเป็นได้แต่ว่าเพิ่มเรื่องของการ query ที่ซับซ้อนขึ้นมา
ส่วน
REST API จะออกแนว static นิดๆไม่ค่อยยืดหยุ่นเหมือน GraphQL แต่ว่าส่วนตัวรู้สึกว่าง่ายต่อการใช้งาน แต่จะเหนื่อยเรื่องของการทำ API ผมเคยทำ microservice แล้วใช้หลาย APIs endpoint มากแล้วคนเขียนไม่ได้เขียนมีแค่คนเดียวมันจะตีกันนิดๆถ้าไม่มีเขียนอธิบายว่า Api ตัวนี้ไว้ใช้ทำอะไรก็จะไม่รู้เลย
/>


Q2: Please explain how javascript benefits from cross-platform development

A2: 
<
-ประหยัดเรื่องเวลาช่วยลดเรื่องของการที่ต้องมาเขียนโค้ดหรือทำความเข้าใจภาษาใหม่. -ความยุ่งยากในเรื่องข้องมานั่งดูโค้ดภาษาที่ไม่เหมือนกันเวลาเกิดข้อผิดพลาด.         -สามารถนำโค้ดมาปรับใช้ในอีก platform ได้เลย
-หน้าตาของ ux/ui จะออกมาเหมือนกันเพราะว่าออกมาจากภาษาเดียวกัน 
/>

Q3: What do you expect to get during an internship at TakeMeTour?

A3: 
<
คาดหวังประสบการณ์การทำงานจริงที่หาไม่ได้จากในมหาลัย และหวังว่าจะได้ passion ใหม่ๆ ความท้าทายใหม่ๆที่น่าสนใจครับ
ถ้าได้มาทำงานที่นี่ อยากพัฒนา skill ทั่งสองฝั่งหน้าบ้านและหลังบ้าน(Full Stack) พัฒนาความสามารถตัวเองไปให้ไกลกว่านี้และที่น่าสนใจจากคำถามข้อที่ 1 เป็นไปได้อยากลองทำเกี่ยวกับ GraphQL เพราะยังไม่เคยลองจริงๆเลยครับ
/>

## Submitting

Please fork this repo and submit your repository at benz@takemetour.com along with your contact information and also your resume if you have one.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
