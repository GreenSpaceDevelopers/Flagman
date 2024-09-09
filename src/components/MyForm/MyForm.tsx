import { useState } from 'react';
import axios from 'axios';
import './MyForm.css';
import MyFormInfoAlert from '../MyFormInfoAlert/MyFormInfoAlert';

const MyForm: React.FC = () => {
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isInfoAlertVisible, setInfoAlertVisible] = useState<boolean>(false);
    
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
        
        if (!phone || !name || !email) {
            alert('Вы не все заполнили!');
            return;
        }
        
        if (!isPhoneNumberValid(phone)) {
            alert('Введите правильный номер телефона!');
            return;
        }
        
        if (!isEmailValid(email)) {
            alert('Введите правильный адрес электронной почты!');
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
                'https://formspree.io/f/xanwkpej',
                JSON.stringify(formData),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            
            setInfoAlertVisible(true);
            setTimeout(() => {
                setInfoAlertVisible(false);
            }, 5000)
            
            setPhone('');
            setName('');
            setEmail('');
            setDesc('');
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
        }
    };
    
    
    
    return (
        <div className="form_container">
            <h2>Закажите звонок</h2>
            <p>Оставьте контакты, по которым мы можем с вами связаться, наши специалисты помогут с решением вашего вопроса</p>
            
            <form className="form" onSubmit={handleSubmit}>
                {isInfoAlertVisible && (
                    <MyFormInfoAlert>
                        Спасибо, мы свяжемся с вами в ближайшее время!
                    </MyFormInfoAlert>
                )}
                
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
                
                <button type="submit" className="app_mainButton form_submitButton">
                    Оставить заявку
                </button>
            </form>
            
            <p className="disclaimer">Оставляя заявку, вы соглашаетесь на обработку персональных данных.</p>
        </div>
    );
}

export default MyForm;
