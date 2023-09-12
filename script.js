var htmlDay = '<option>Vui lòng chọn ngày</option>';
for (var i = 1; i <= 31; i++) {
    htmlDay += `<option>${i}</option>`;
}
document.getElementById('day').innerHTML = htmlDay;

var htmlMonth = '<option>Vui lòng chọn tháng</option>';
for (var i = 1; i <= 12; i++) {
    htmlMonth += `<option>${i}</option>`;
}
document.getElementById('month').innerHTML = htmlMonth;

var htmlYear = '<option>Vui lòng chọn năm</option>';
for (var i = 1990; i <= new Date().getFullYear(); i++) {
    htmlYear += `<option>${i}</option>`;
}
document.getElementById('year').innerHTML = htmlYear;