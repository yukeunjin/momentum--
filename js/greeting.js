const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const	HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
	event.preventDefault();//event�� ���� �ϴ� �ൿ ����(�������� �⺻ ���� = ������ ���ΰ�ħ)
	loginForm.classList.add(HIDDEN_CLASSNAME);//���� �߰�
	const username = loginInput.value;//���� ���� username�� ����
	localStorage.setItem(USERNAME_KEY, username);//localStorage�� ����
	paintGreeting();//paintGreeting �Լ� ȣ��, username ����
}

function paintGreeting(){
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;//greeting(h1) �ȿ� �ؽ�Ʈ �߰�
	greeting.classList.remove(HIDDEN_CLASSNAME); // greeting(h1)�� hidden ����
}



const savedUsername = localStorage.getItem(USERNAME_KEY);//1�ܰ� localStorageȮ��

if(savedUsername === null){//����� ���� ������
	loginForm.classList.remove(HIDDEN_CLASSNAME);//hidden���� = form ���
	loginForm.addEventListener("submit", onLoginSubmit ); //submit ��ٸ�, onLoginSubmit�Լ� �ҷ���
} else {
	paintGreeting();//���� ����Ǿ� ������ �ٷ� paintGreeting�Լ� ȣ��
}