document.addEventListener("DOMContentLoaded", ()=>{
    // смена изображения для симптомов на десктопе--------------------------------------------
    const person = document.querySelectorAll('.person-img');
    const symptom = document.querySelector('.symptoms-img');
    person.forEach(p=>{
        p.addEventListener('click', function(e){
            let target = e.target;
            let src = target.getAttribute('src');
            let name = target.getAttribute('person');
            let changeImg = symptom.querySelector('.smart_img');
            let changePerson = symptom.querySelector('.symptoms-name');
            console.log(target);
            console.log(changeImg);
            changeImg.setAttribute('src', src);
            changePerson.innerHTML = `${name}`;
        })
    });
    // выбор возраста на мобилке-------------------------------------------------------------
    const mobChange = document.querySelector('.for_mobile__change');
    const changeSpan = document.querySelectorAll('.change_person')
    mobChange.addEventListener('click',function(e){
        let target = e.target;
        function chnagePersonBlock(arg) {
            let personBlock = document.querySelectorAll('.person-selector');
            let qurrentPersonBlock = document.querySelector(`.person-selector.${arg}`);
            personBlock.forEach(p=>{
                p.classList.remove('active')
            });
            qurrentPersonBlock.classList.add('active')
        }
        if(target.classList.value == 'change_person') {
            let personAtr = target.getAttribute('change')
            changeSpan.forEach(c=>{
                c.classList.remove('active')
            })
            target.classList.add('active')
            chnagePersonBlock(personAtr)
        }
    });
    // просмотр симптомов на мобилке-----------------------------------------------------------
      const mins = document.querySelectorAll('.symptoms-item');
      const hideImg = document.querySelectorAll('.hidden_img')
        mins.forEach(m=>{
            m.addEventListener('click', function(e){
                let target = e.target;
                let curentImg = target.querySelector('.hidden_img')
                if (document.documentElement.clientWidth < 768) {
                    hideImg.forEach(h=>{
                        h.style.display = 'block'
                    })
                    mins.forEach(mNew=>{
                        mNew.style.width = '119px'
                    })
                    curentImg.style.display = 'none'
                    target.style.width = '100%'
                  } 
            })
        })
})