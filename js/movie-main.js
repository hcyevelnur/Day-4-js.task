const products = [
    {
      id: 1,
      adi: "Breaking Bad",
    },
  ];
  
  // HTML dən id ləri çağır
  const kartaelaveet = document.getElementById("elave-et");
  const saygaccDiv = document.getElementById("goster");
  
  // Boş səbət
  let saygacc = [];
  let saygac = 2; // Səbət 2 dən başlasın
  
  
  function updatesaygac() {
    saygac = saygacc.length;
    if (saygac > 0) {
      saygac = 3;
    } else {
      saygac = 2;
    }
    document.getElementById("cart-item-count").innerText = `(${saygac})`;
  }
  
  
  
  function renderCartItem(item) {
    return `
      <div style="color: black;" class="droptown" data-id="${item.id}">
        <button style="background-color: transparent; border: none; color: red; " class="silme-butonu">X</button>${item.adi}
      </div>
    `;
  }
  
  function rendersaygacc() {
    let html = "";
    saygacc.forEach((item) => {
      html += renderCartItem(item);
    });
    saygaccDiv.innerHTML = html;
  }
  
  function elaveett() {
    rendersaygacc();
    if (saygacc.length > 0) {
      kartaelaveet.innerText = "Remove";
      kartaelaveet.classList.add("remove-btn");
      kartaelaveet.style.backgroundColor = "black";
      const saribolme = document.querySelector("div[style='background-color: yellow; padding: 1px;']");
      saribolme.style.backgroundColor = "red";
      saribolme.querySelector("p").innerText = "Breaking Bad adlı film səbətinizdə var";
    } else {
      kartaelaveet.innerText = "Add Watch list";
      kartaelaveet.classList.remove("remove-btn");
      kartaelaveet.style.backgroundColor = "";
      const saribolme = document.querySelector("div[style='background-color: red; padding: 1px;']");
      saribolme.style.backgroundColor = "yellow"; 
      saribolme.querySelector("p").innerText = "Breaking Bad adlı film səbətinizdə yoxdur";
    }
  }
  
  kartaelaveet.addEventListener("click", function() {
    if (saygacc.length === 0) {
      alert("Filmi səbətə əlavə etdin!");
    }
  });
  
  kartaelaveet.addEventListener("click", function() {
    if (saygacc.length > 0) {
      alert("Film səbətdən çıxardılacaq!");
    }
  });
  
  
  
  kartaelaveet.addEventListener("click", function () {
    if (saygacc.length > 0) {
      saygacc = [];
      elaveett();
      updatesaygac();
    } else {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      saygacc.push(randomProduct);
      elaveett();
      updatesaygac();
    }
  });
  
    saygaccDiv.addEventListener("click", function (e) {
    if (e.target.classList.contains("silme-butonu")) {
      const itemId = parseInt(e.target.closest(".droptown").dataset.id);
      saygacc = saygacc.filter((item) => item.id !== itemId);
      elaveett();
      updatesaygac();
      alert("Film səbətdən çıxardılacaq!");
    }
  });
  
  
  