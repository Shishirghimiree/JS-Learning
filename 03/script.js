const btn = document.querySelector("#throttle");
        const throttleFunction = (func, delay) => {
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }

        document.querySelector('#center').addEventListener("mousemove",
            throttleFunction((details) => {
                var div=document.createElement("div");
                div.classList.add("imagediv");
                div.style.left=details.clientX+"px";
                div.style.top=details.clientY+"px";

                var img=document.createElement("img");
                img.setAttribute("src","https://images.unsplash.com/photo-1732363903885-6977b5c50611?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

                div.appendChild(img);

                document.body.appendChild(div);

                gsap.to(img,{
                    y:"0",
                    ease:Power1,
                    duration:0.6
                })
                gsap.to(img,{
                    y:"100%",
                    delay:.6,
                    ease:Power1,
                })
                setTimeout(function(){
                    div.remove();
                },1000)
            }, 500));