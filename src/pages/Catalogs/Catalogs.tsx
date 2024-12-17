import {useEffect, useState} from "react";
import { FileEarmarkZip, FiletypePdf } from 'react-bootstrap-icons';
import './Catalogs.css';
import MyForm from "../../components/MyForm/MyForm";

const file1 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Электронный каталог (K25, G50, R30, U).zip`;
const file2 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Каталог торговых стеллажей В3.pdf`;
const file3 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Каталог К25_2019.pdf`;
const file4 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Каталог G50_2020.pdf`;
const file5 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Каталог R30_2017.pdf`;
const file6 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Каталог_стеллажей_серии_Modular_1.pdf`;
const file7 = `${process.env.REACT_APP_STORAGE_URL}files/catalogs/Кассовые боксы.pdf`;

const file8 = `${process.env.REACT_APP_STORAGE_URL}files/instructions/Инструкция G50.pdf`;
const file9 = `${process.env.REACT_APP_STORAGE_URL}files/instructions/Инструкция Modular.pdf`;
const file10 = `${process.env.REACT_APP_STORAGE_URL}files/instructions/Инструкция G50 мезонин.pdf`;
const file11 = `${process.env.REACT_APP_STORAGE_URL}files/instructions/Инструкция R30.pdf`;
const file12 = `${process.env.REACT_APP_STORAGE_URL}files/instructions/Инструкция по монтажу К25.pdf`;
const file13 = `${process.env.REACT_APP_STORAGE_URL}files/instructions/Инструкция_по_монтажу_фронтальных_стеллажей.pdf`;

const file14 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Торговые стеллажи (ч1).pdf`;
const file15 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Торговые стеллажи (ч2).pdf`;
const file16 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Складские стеллажи.pdf`;
const file17 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Модулар.pdf`;
const file18 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Металлопорошок.pdf`;
const file19 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Мезонин на колоннах.pdf`;
const file20 = `${process.env.REACT_APP_STORAGE_URL}files/brochures/Автоматическая шаттловая система.pdf`;

const file21 = `${process.env.REACT_APP_STORAGE_URL}files/passports/Паспорт. Шаттл WSM.pdf`;
const file22 = `${process.env.REACT_APP_STORAGE_URL}files/passports/Паспорт. Стеллажи торговые B3.pdf`;
const file23 = `${process.env.REACT_APP_STORAGE_URL}files/passports/Паспорт. Стеллажи торговые К25.pdf`;
const file24 = `${process.env.REACT_APP_STORAGE_URL}files/passports/Паспорт. Стеллажи среднегрузовые R30.pdf`;
const file25 = `${process.env.REACT_APP_STORAGE_URL}files/passports/Паспорт. Стеллажи складские G50.pdf`;
const file26 = `${process.env.REACT_APP_STORAGE_URL}files/passports/Паспорт_Кассовый_бокс_Микрон_SM_SA35,_SA36_с_УКН_1_v_3_10_Конденсатор.pdf`;

const file27 = `${process.env.REACT_APP_STORAGE_URL}files/operating_manuals/Руководство по эксплуатации шаттла.pdf`;
const file28 = `${process.env.REACT_APP_STORAGE_URL}files/operating_manuals/РЭ глубинных стеллажей.pdf`;
const file29 = `${process.env.REACT_APP_STORAGE_URL}files/operating_manuals/Руководство_по_эксплуатации_и_обслуживанию_стеллажей_серии_R30_РЭ.pdf`;
const file30 = `${process.env.REACT_APP_STORAGE_URL}files/operating_manuals/Руководство_по_эксплуатации_и_обслуживанию_стеллажей_серии_R30_РЭ.pdf`;

const Catalogs: React.FC = () => {
    const [isPageVisible, setPageVisible] = useState<boolean>(false);

    useEffect(() => {
        setPageVisible(true);
    }, [])

    return (
        <div className={`Catalogs ${isPageVisible ? 'visible' : ''}`}>
            <div className='Catalogs_wrapper'>
                <div>
                    <div className='catalogsList'>
                        <h2>Каталоги</h2>
                        <div className='catalogsBlock'>
                            <a href={file1} target='_blank' rel="noreferrer">
                                <FileEarmarkZip className='catalog_fileLogo' size={50}/>
                                <p>Электронный каталог (K25, G50, R30, U)</p>
                            </a>

                            <a href={file2} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Каталог торговых стеллажей В3</p>
                            </a>

                            <a href={file3} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Каталог К25_2019</p>
                            </a>

                            <a href={file4} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Каталог G50_2020</p>
                            </a>

                            <a href={file5} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Каталог R30_2017</p>
                            </a>

                            <a href={file4} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Каталог U_2019</p>
                            </a>

                            <a href={file6} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Каталог серии Modular 1</p>
                            </a>

                            <a href={file7}>
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Кассовые боксы</p>
                            </a>
                        </div>
                    </div>

                    <div className='catalogsList'>
                        <h2>Инструкции</h2>
                        <div className='catalogsBlock'>
                            <a href={file8} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Инструкция по монтажу стеллажей G50 (глубинные стеллажи)</p>
                            </a>

                            <a href={file9} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Инструкция по монтажу стеллажей серии Modular</p>
                            </a>

                            <a href={file10} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Инструкция по монтажу стеллажей G50  (мезонин)</p>
                            </a>

                            <a href={file11} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Инструкция по монтажу стеллажей серии R30</p>
                            </a>

                            <a href={file12} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Инструкция по монтажу К25</p>
                            </a>

                            <a href={file13} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Инструкция по монтажу фронтальных стеллажей G50</p>
                            </a>
                        </div>
                    </div>

                    <div className='catalogsList'>
                        <h2>Брошюры</h2>
                        <div className='catalogsBlock'>
                            <a href={file14} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Торговые стеллажи (ч1)</p>
                            </a>

                            <a href={file15} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Торговые стеллажи (ч2)</p>
                            </a>

                            <a href={file16} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Складские стеллажи</p>
                            </a>

                            <a href={file17} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Модулар</p>
                            </a>

                            <a href={file18} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Металлопорошок</p>
                            </a>

                            <a href={file19} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Мезонин на колоннах</p>
                            </a>

                            <a href={file20} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Автоматическая шаттловая система</p>
                            </a>
                        </div>
                    </div>

                    <div className='catalogsList'>
                        <h2>Паспорта</h2>
                        <div className='catalogsBlock'>
                            <a href={file21} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Паспорт. Шаттл WSM</p>
                            </a>

                            <a href={file22} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Паспорт. Стеллажи торговые B3</p>
                            </a>

                            <a href={file23} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Паспорт. Стеллажи торговые К25</p>
                            </a>

                            <a href={file24} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Паспорт. Стеллажи среднегрузовые R30</p>
                            </a>

                            <a href={file25} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Паспорт. Стеллажи складские G50</p>
                            </a>

                            <a href={file26} target='_blank' rel="noreferrer">
                                <FiletypePdf className='catalog_fileLogo' size={50}/>
                                <p>Паспорт Кассовый бокс Микрон SM</p>
                            </a>
                        </div>
                    </div>

                    <div className='catalogsList'>
                    <h2>Руководства по эксплуатации</h2>
                    <div className='catalogsBlock'>
                        <a href={file27} target='_blank' rel="noreferrer">
                            <FiletypePdf className='catalog_fileLogo' size={50}/>
                            <p>Руководство по эксплуатации шаттла</p>
                        </a>

                        <a href={file28} target='_blank' rel="noreferrer">
                            <FiletypePdf className='catalog_fileLogo' size={50}/>
                            <p>РЭ глубинных стеллажей</p>
                        </a>

                        <a href={file29} target='_blank' rel="noreferrer">
                            <FiletypePdf className='catalog_fileLogo' size={50}/>
                            <p>Инструкция по эксплуатации G50 12 07 2021</p>
                        </a>

                        <a href={file30} target='_blank' rel="noreferrer">
                            <FiletypePdf className='catalog_fileLogo' size={50}/>
                            <p>Руководство  по эксплуатации и обслуживанию стеллажей серии R30 РЭ</p>
                        </a>
                    </div>
                </div>
                </div>
            </div>

            <span id='MessageForm'>
                <MyForm />
            </span>
        </div>
    );
}

export default Catalogs;