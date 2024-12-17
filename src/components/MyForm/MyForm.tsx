import { useState } from 'react';
import axios from 'axios';
import './MyForm.css';
import Alert from "../Alert/Alert";

const MyForm: React.FC = () => {
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isInfoAlertVisible, setInfoAlertVisible] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [isDisabled, setDisabled] = useState<boolean>(false);

    const isPhoneNumberValid = (phone: string): boolean => {
        const phoneRegex = /^[+]*[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    };
    
    const isEmailValid = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        
        if (!phone || !name || !email) {
            setAlertMessage(`Заполните обязательные поля для создания заявки:\nИмя, Номер телефона, Email`);
            setInfoAlertVisible(true);
            return;
        }
        
        if (!isPhoneNumberValid(phone)) {
            setAlertMessage('Номер телефона не соотвествует международному формату!');
            setInfoAlertVisible(true);
            return;
        }
        
        if (!isEmailValid(email)) {
            setAlertMessage('Введите корректный адрес электронной почты!');
            setInfoAlertVisible(true);
            return;
        }
        
        const formData = {
            'Имя': name,
            'Телефон': phone, 
            'Электронная почта': email,
            'Сопроводительное письмо': desc,
        };
        
        try {
            await axios.post(
                'https://formspree.io/f/xldrvlaq',
                JSON.stringify(formData),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setAlertMessage('Ваша заявка отправлена');
            setInfoAlertVisible(true);
            
            setPhone('');
            setName('');
            setEmail('');
            setDesc('');
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            setAlertMessage('Произошла ошибка при отправке заявки');
            setInfoAlertVisible(true);
        }

        setDisabled(false);
    };
    
    
    
    return (
        <>
            <div className="form_container">
                <h2>Закажите звонок</h2>
                <p>Оставьте контакты, по которым мы можем с вами связаться, наши специалисты помогут с решением вашего вопроса</p>

                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="input name"
                        name='Имя'
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        value={name}
                        placeholder='Имя'
                    />

                    <input
                        className="input tel"
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        name='Телефон'
                        value={phone}
                        placeholder='Номер телефона'
                    />

                    <input
                        className="input email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        name='Email'
                        placeholder='Email'
                    />

                    <textarea
                        className="input desc"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        name='Сопроводительное письмо'
                        placeholder='Сопроводительное письмо'
                    />

                    <button disabled={isDisabled} type="submit" className="app_mainButton form_submitButton">
                        Оставить заявку
                    </button>
                </form>

                <p className="disclaimer">Оставляя заявку, вы соглашаетесь на обработку персональных данных.</p>
            </div>

            <Alert visible={isInfoAlertVisible} setVisible={setInfoAlertVisible} autoCloseTime={2500}>
                {alertMessage}
            </Alert>
        </>
    );
}

export default MyForm;
