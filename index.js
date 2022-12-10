const hiddenBlogs = document.querySelectorAll(".hidden-blogs")
const viewMoreBtn = document.querySelector(".view-more-btn")

viewMoreBtn.addEventListener("click", function(){
   hiddenBlogs.forEach(hiddenBlog =>{
    hiddenBlog.classList.remove("hidden")
   })
    

     
    

    
    
    
})

n =  new Date(); 
y = n.getFullYear(); 
m = n.getMonth() + 1; 
d = n.getDate(); 
document.getElementById("date").innerHTML = m + "/" + d + "/" + y; 
document.getElementById("home-date").innerHTML = m + "/" + d + "/" + y; 