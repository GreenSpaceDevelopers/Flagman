import { FileEarmarkZip, FiletypePdf } from 'react-bootstrap-icons';
import './Catalogs.css';

import file1 from '../../assets/files/catalogs/Elektronnyy_katalog_(K25_G50_R30_U).zip';
import file2 from '../../assets/files/catalogs/Каталог торговых стеллажей В3.pdf';
import file3 from '../../assets/files/catalogs/Каталог К25_2019.pdf';
import file4 from '../../assets/files/catalogs/Каталог G50_2020.pdf';
import file5 from '../../assets/files/catalogs/Каталог R30_2017.pdf';
import file6 from '../../assets/files/catalogs/Каталог_стеллажей_серии_Modular_1.pdf';
import file7 from '../../assets/files/catalogs/Кассовые боксы.pdf';

import file8 from '../../assets/files/instructions/Инструкция G50.pdf';
import file9 from '../../assets/files/instructions/Инструкция Modular.pdf';
import file10 from '../../assets/files/instructions/Инструкция G50 мезонин.pdf';
import file11 from '../../assets/files/instructions/Инструкция R30.pdf';
import file12 from '../../assets/files/instructions/Инструкция по монтажу К25.pdf';
import file13 from '../../assets/files/instructions/Инструкция_по_монтажу_фронтальных_стеллажей.pdf';

import file14 from '../../assets/files/brochures/Торговые стеллажи (ч1).pdf';
import file15 from '../../assets/files/brochures/Торговые стеллажи (ч2).pdf';
import file16 from '../../assets/files/brochures/Складские стеллажи.pdf';
import file17 from '../../assets/files/brochures/Модулар.pdf';
import file18 from '../../assets/files/brochures/Металлопорошок.pdf';
import file19 from '../../assets/files/brochures/Мезонин на колоннах.pdf';
import file20 from '../../assets/files/brochures/Автоматическая шаттловая система.pdf'; 

import file21 from '../../assets/files/passports/Паспорт. Шаттл WSM.pdf';
import file22 from '../../assets/files/passports/Паспорт. Стеллажи торговые B3.pdf';
import file23 from '../../assets/files/passports/Паспорт. Стеллажи торговые К25.pdf';
import file24 from '../../assets/files/passports/Паспорт. Стеллажи среднегрузовые R30.pdf';
import file25 from '../../assets/files/passports/Паспорт. Стеллажи складские G50.pdf';
import file26 from '../../assets/files/passports/Паспорт_Кассовый_бокс_Микрон_SM_SA35,_SA36_с_УКН_1_v_3_10_Конденсатор.pdf';

import file27 from '../../assets/files/operating_manuals/Руководство по эксплуатации шаттла.pdf';
import file28 from '../../assets/files/operating_manuals/РЭ глубинных стеллажей.pdf';
import file29 from '../../assets/files/operating_manuals/Инструкция_по_эксплуатации_G50_12_07_2021.pdf';
import file30 from '../../assets/files/operating_manuals/Руководство_по_эксплуатации_и_обслуживанию_стеллажей_серии_R30_РЭ.pdf';


const Catalogs: React.FC = () => {
    return (
        <div className="Catalogs">
            <div>
                <div className='catalogsList'>
                    <h2>Каталоги</h2>
                    <div className='catalogsBlock'>
                        <a href={file1} download>
                            <FileEarmarkZip className='catalog_fileLogo' size={50} />
                            <p>Электронный каталог (K25, G50, R30, U)</p>
                        </a>
                        
                        <a href={file2} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Каталог торговых стеллажей В3</p>
                        </a>
                        
                        <a href={file3} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Каталог К25_2019</p>
                        </a>
                        
                        <a href={file4} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Каталог G50_2020</p>
                        </a>
                        
                        <a href={file5} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Каталог R30_2017</p>
                        </a>
                        
                        <a href={file4} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Каталог U_2019</p>
                        </a>
                        
                        <a href={file6} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Каталог серии Modular 1</p>
                        </a>
                        
                        <a href={file7}>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Кассовые боксы</p>
                        </a>
                        
                        <a href={file7}>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Мезонин на колоннах</p>
                        </a>
                    </div>
                </div>
                
                <div className='catalogsList'>
                    <h2>Инструкции</h2>
                    <div className='catalogsBlock'>
                        <a href={file8} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по монтажу стеллажей G50 (глубинные стеллажи)</p>
                        </a>
                        
                        <a href={file9} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по монтажу стеллажей серии Modular</p>
                        </a>
                        
                        <a href={file10} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по монтажу стеллажей G50  (мезонин)</p>
                        </a>
                        
                        <a href={file11} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по монтажу стеллажей серии R30</p>
                        </a>
                        
                        <a href={file12} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по монтажу К25</p>
                        </a>
                        
                        <a href={file13} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по монтажу фронтальных стеллажей G50</p>
                        </a>
                    </div>
                </div>
                
                <div className='catalogsList'>
                    <h2>Брошюры</h2>
                    <div className='catalogsBlock'>
                        <a href={file14} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Торговые стеллажи (ч1)</p>
                        </a>
                        
                        <a href={file15} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Торговые стеллажи (ч2)</p>
                        </a>
                        
                        <a href={file16} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Складские стеллажи</p>
                        </a>
                        
                        <a href={file17} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Модулар</p>
                        </a>
                        
                        <a href={file18} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Металлопорошок</p>
                        </a>
                        
                        <a href={file19} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Мезонин на колоннах</p>
                        </a>
                        
                        <a href={file20} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Автоматическая шаттловая система</p>
                        </a>
                    </div>
                </div>
                
                <div className='catalogsList'>
                    <h2>Брошюры</h2>
                    <div className='catalogsBlock'>
                        <a href={file21} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Паспорт. Шаттл WSM</p>
                        </a>
                        
                        <a href={file22} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Паспорт. Стеллажи торговые B3</p>
                        </a>
                        
                        <a href={file23} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Паспорт. Стеллажи торговые К25</p>
                        </a>
                        
                        <a href={file24} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Паспорт. Стеллажи среднегрузовые R30</p>
                        </a>
                        
                        <a href={file25} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Паспорт. Стеллажи складские G50</p>
                        </a>
                        
                        <a href={file26} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Паспорт Кассовый бокс Микрон SM</p>
                        </a>
                    </div>
                </div>
                
                <div className='catalogsList'>
                    <h2>Брошюры</h2>
                    <div className='catalogsBlock'>
                        <a href={file27} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Руководство по эксплуатации шаттла</p>
                        </a>
                        
                        <a href={file28} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>РЭ глубинных стеллажей</p>
                        </a>
                        
                        <a href={file29} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Инструкция по эксплуатации G50 12 07 2021</p>
                        </a>
                        
                        <a href={file30} download>
                            <FiletypePdf className='catalog_fileLogo' size={50} />
                            <p>Руководство  по эксплуатации и обслуживанию стеллажей серии R30 РЭ</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogs;