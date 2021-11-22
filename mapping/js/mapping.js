const btn = document.querySelectorAll('.button_wrap button');
        const content = document.querySelectorAll('.contents li');

        for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function (e) {
                e.preventDefault();
                let target = e.target.dataset.id
                console.log(target);

                for (var x = 0; x < content.length; x++) {
                    content[x].style.display = 'none';
                }
                document.getElementById(target).style.display = 'block';

                for (var j = 0; j < btn.length; j++) {
                    btn[j].classList.remove('on');
                    e.target.classList.add('on');
                }
            })
        }