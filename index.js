const catpostcontainer = document.getElementById("catPost");
const mark = document.getElementById("mark");
const spin = document.getElementById("spinner");
let markCount = 0;

const categoryPost = async (value) => {
  spin.classList.remove('hidden')
  if (value === "") {
    alert("please provide valid search");
    return;
  }
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();
  // console.log(data)
 setTimeout(() => {
  data.posts.forEach((element) => {
    spin.classList.add('hidden')
    // console.log(element)
    const div = document.createElement("div");

    div.innerHTML = `
        <div class="mb-5">
              <div class="flex gap-3 bg-[#797DFC1A] lg:p-10 p-2 rounded-lg w-full">
                <div class="relative">
                  <img
                    class="border-2 border-gray-200 rounded-full w-20"
                    src="${element.image}"
                    alt=""
                  />
                  <div id="activeStatus" class="h-3 w-3 absolute right-1 top-2 ${
                    element.isActive ? "bg-green-500" : "bg-red-500"
                  } rounded-full"></div>
                </div>
                <div class="space-y-2">
                  <span class=" font-semibold pr-4">#<span>${
                    element.category
                  }</span></span>
                  <span class=" font-semibold">Author : ${
                    element.author.name
                  }</span>
                  <h3 class="text-xl font-bold">
                  ${element.title}
                  </h3>
                  <p class="opacity-70">
                  ${element.description}
                  </p>

                  <hr />

                  <div class="flex justify-between">
                    <div class="flex gap-6">
                      <h3 class="font-bold space-x-2 text-lg opacity-70">
                        <i class="fa-regular fa-message"></i><span>${
                          element.comment_count
                        }</span>
                      </h3>
                      <h3 class="font-bold space-x-2 text-lg opacity-70">
                        <i class="fa-regular fa-eye"></i><span>${
                          element.view_count
                        }</span>
                      </h3>
                      <h3 class="font-bold space-x-2 text-lg opacity-70">
                        <i class="fa-regular fa-clock"></i
                        ><span><span>5</span>${element.posted_time}</span
                        >min
                      </h3>
                    </div>
                    <div class="text-lg">
                      <i onclick="markAsread('${element.title}','${element.view_count}',count())"
                        class="fa-regular fa-envelope bg-green-400 text-white p-2 rounded-full"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
        catpostcontainer.appendChild(div);
       
  });
 }, 2000);
};
let markplus = parseInt(document.getElementById("mark-count").innerText);
const count = () => {
  markCount += 1;
  document.getElementById("mark-count").innerText = markCount;
};
const discus = document.getElementById("discus");
const markAsread = (title, view) => {
  // console.log(title,view)
  const div = document.createElement("div");
  div.className =
    "flex gap-3 justify-between shadow-md lg:p-8 p-2 bg-white mb-3 rounded-md";
  div.innerHTML = `
    <h3 class="font-bold" >${title}</h3>
    <h3 class="font-bold space-x-2 flex"><i class="fa-regular fa-eye"></i><span>${view}</h3>
    `;
  mark.appendChild(div);
};
// const searchBtn=document.getElementById('search-btn');

const getValue = async () => {
  spin.classList.remove('hidden')
  // setTimeout(() => {
  //   return spin.classList.add("hidden");
  // }, 2000);
  // spin.classList.remove("hidden");

  const searchValue = document.getElementById("searchinp").value;
  if (searchValue === "") {
    return alert("plese provide a valid search");
  }

  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValue}`
  );
  const data = await res.json();
  console.log(data.posts)
  catpostcontainer.textContent = "";
 setTimeout(() => {
  data.posts.forEach((element) => {
    spin.classList.add('hidden')
    
      console.log(element);
      let div = document.createElement("div");
      div.innerHTML += `
      <div class="mb-5">
            <div class="flex gap-3 bg-[#797DFC1A] lg:p-10 p-2 rounded-lg w-full">
              <div class="relative">
                <img
                  class="border-2 border-gray-200 rounded-full w-20"
                  src="${element.image}"
                  alt=""
                />
                <div id="activeStatus" class="h-3 w-3 absolute right-1 top-2 ${
                  element.isActive ? "bg-green-500" : "bg-red-500"
                } rounded-full"></div>
              </div>
              <div class="space-y-2">
                <span class=" font-semibold pr-4">#<span>${
                  element.category
                }</span></span>
                <span class=" font-semibold">Author : ${
                  element.author.name
                }</span>
                <h3 class="text-xl font-bold">
                ${element.title}
                </h3>
                <p class="opacity-70">
                ${element.description}
                </p>
  
                <hr />
  
                <div class="flex justify-between">
                  <div class="flex gap-6">
                    <h3 class="font-bold space-x-2 text-lg opacity-70">
                      <i class="fa-regular fa-message"></i><span>${
                        element.comment_count
                      }</span>
                    </h3>
                    <h3 class="font-bold space-x-2 text-lg opacity-70">
                      <i class="fa-regular fa-eye"></i><span>${
                        element.view_count
                      }</span>
                    </h3>
                    <h3 class="font-bold space-x-2 text-lg opacity-70">
                      <i class="fa-regular fa-clock"></i
                      ><span><span>5</span>${element.posted_time}</span
                      >min
                    </h3>
                  </div>
                  <div class="text-lg">
                    <i onclick="markAsread('${element.title}','${element.view_count}',count())"
                      class="fa-regular fa-envelope bg-green-400 text-white p-2 rounded-full"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
      
      catpostcontainer.appendChild(div);
    });
 }, 2000);
};
categoryPost();
const latestContainer = document.getElementById("latest-container");
const latestPost = async () => {
  spin.classList.remove('hidden')
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(data)
  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card h-full bg-base-100 shadow-xl p-6 border-2 border-gray-100">
        <figure class="rounded-3xl mb-4"><img  src="${
          item.cover_image
        }" alt="post" /></figure>
        <div class="card-body p-0 space-y-1">
          <h3 class="space-x-2 opacity-70"><i class="fa-regular fa-calendar-days"></i><span>${
            item.author?.posted_date || "No publish date"
          }</span></h3>
          <h2 class="text-xl font-bold">${item.title}</h2>
          <p>${item.description}</p>
          <div class="flex gap-2">
            <img class="h-12 w-12 border-2 border-sky-200 rounded-full" src="${
              item.profile_image
            }" alt="">
            <div>
              <h3 class="font-bold">${item.author.name}</h3>
              <span>${item.author?.designation || "Unknown"}</span>
            </div>
          </div>
        </div>
      </div>
  
        `;
    latestContainer.appendChild(div);
  });
};
latestPost();
