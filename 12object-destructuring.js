const course ={
    coursename : "javascript hindi",
    fee : "999",
    courseInstructor : "HiteshSir"
}
// course.courseInstructor   this is the basic way 

const {courseInstructor} = course //this is object deconstuction, here in {courseInstructor : instructor}  after the colon we have given a name to the courseInstructor so whnever we have to console we can simply write the given name anywhere,
console.log(courseInstructor);

