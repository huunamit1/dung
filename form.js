const form = document.querySelector('#test-form');

form.onsubmit = function (e) {
    e.preventDefault();

    let NameOj = document.querySelector('input[name="Name"]');
    let NumberOj = document.querySelector('input[name="Number Phone"]');
    let AdrOj = document.querySelector('input[name="Adress"]');
    let Name = NameOj.value;
    let Number = NumberOj.value;
    let Adress = AdrOj.value;
    let rswr = document.querySelectorAll('.wr');
    let tbLoi = document.querySelector('.msg');
    tbLoi.innerHTML = '';
    if (rswr.length > 0) {
        rswr.forEach(function (item) {
            item.innerText = '';
        });
    }
    let loi = {};
    if (Name.trim() == '') {
        loi['Name'] = 'Vui lòng nhập tên';
        NameOj.parentElement.querySelector('.wr').innerText = loi['Name'];
    }
    if (Number.trim() == '') {
        loi['Number'] = 'Vui lòng nhập đúng số điện thoại';
        NumberOj.parentElement.querySelector('.wr').innerText = loi['Number'];
    }
    if (Adress.trim() == '') {
        loi['adr'] = 'Vui lòng nhập địa chỉ';
        AdrOj.parentElement.querySelector('.wr').innerText = loi['adr'];
    }
    if (Object.keys(loi).length == 0) {
        tbLoi.innerHTML =
            '<div class="tb-loi" style="background-color:#c2b9e9;">Gửi thành công</div>';
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
            .then((res) => res.json())
            .then((html) => {
                console.log('🚀 ~ .then ~ html', html);
                alert('Success');
            });
    } else {
        e.preventDefault();
        tbLoi.innerHTML =
            '<div class="tb-loi" style=" background-color: crimson;">Vui lòng kiêm tra thông tin</div>';
    }
};
