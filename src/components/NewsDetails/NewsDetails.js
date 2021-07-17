import React from 'react';
import style from './NewsDetails.module.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import newsDetailsImg from '../../assets/newsDetailsImg/newsDetailsImg.png'

const NewsDetails = () => {
    return (
        <>
           <div className={style.mainDetails}>
               <BreadCrumbs/>

                <div className={style.mainDetails__container}>
                    <div className={style.mainDetails__news}>
                        <div>
                            <img src={newsDetailsImg} alt="img" /> {/* props.item */}
                        </div>
                        <div className={style.mainDetails__right}>
                            <p className={style.mainDetails__data}>25.06.2021</p>
                            <h1 className={style.mainDetails__title}>
                                Что нужно знать об экологичсеких купальниках{/* props.item */}
                            </h1>
                            <p className={style.mainDetails__text}>А вы знали, что ваш любимый купальник может стать одной из причин загрязнения планеты пластиком? Этот предмет гардероба, как правило, шьется из нейлона или полиэстера — синтетических материалов, которые разлагаются сотни лет. Во время стирки из таких вещей вымываются волокна микропластика: сперва они попадают в сточные воды, а затем в мировой океан, неся угрозу жизни всех его обитателей. И учитывая, как много купальников успевает пройти через наши гардеробы (двое из пяти американцев покупают как минимум один новый купальник в год), очевидно, это отнюдь не самая экологичная вещь на свете
                            Но, к счастью, существует целая плеяда молодых брендов пляжной одежды, готовых изменить ситуацию к лучшему. «Когда-то мне трудно было найти красивый купальник, сделанный в соответствии с принципами устойчивого развития. Все было сшито из синтетических материалов, — рассказывает Джаная Вилкинс, основательница бренда SLO Active. — Хотелось предложить собственную альтернативу».

                            Вилкинс признается, что в вопросе создания экологичной марки купальников единого регламента на этот счет не существует. Чтобы вещь хорошо растягивалась, в ткань так или иначе необходимо добавить хотя бы небольшой процент эластана. И все же шопинг для пляжного сезона можно сделать экологичным. Как именно — рассказывают основатели брендов SLO Active, Stay Wild Swim и Natasha Tonic.{/* props.item */}</p>
                        </div>
                    </div>
                    <h2>Другие новости</h2>
                    {/* <div className="list">                
                        {topicsData.map((item) =>(
                        <TopicCard key={item.id} item={item} />
                    
                        ))}                
                    </div> */}
                </div>

           </div> 
        </>
    );
};

export default NewsDetails;