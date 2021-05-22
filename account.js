let accountOpen = false
document.getElementById('account').addEventListener('click', () => {
    //function of the button
    if (accountOpen){
        //closing
        document.getElementById('account-manager').style.animationName = 'closeAccountM';
        setTimeout(() => {
            document.getElementById('account-manager').style.display = '';
            document.getElementById('account-manager').style.animationName = '';
        }, 300);
    } else {
        //opening
        document.getElementById('account-manager').style.display = 'inline-block';
    }
    accountOpen = !accountOpen
})