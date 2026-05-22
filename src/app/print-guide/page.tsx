'use client';

import { Layout } from '@/components/layout';
import styles from './page.module.css';

export default function PrintGuidePage() {
    return (
        <Layout>
            <div className={styles.container}>
                {/* 1. Paper Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.engTitle}>Paper</span>
                        <h2 className={styles.korTitle}>종이</h2>
                        <p className={styles.sectionDesc}>
                            인쇄시 가장 선호하는 종이의 종류와 특징을 알려드립니다.<br/>
                            인쇄 전 간략하게 정보를 확인하시면 용도에 맞는 용지선택에 도움이 됩니다.<br/>
                            종이선택에 어려움이 있으신가요?<br/>
                            걱정말고 문의주세요. 담당부서에서 아주 자세히 안내해 드립니다.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <GuideCard 
                            title="스노우지" 
                            desc="광택이 없는 용지로 유광용지인 아트지와 함께 대중적으로 많이 사용되는 순백색의 용지입니다. 아트지와는 달리 광택은 없지만 탄성이 좋으며, 종이 자체의 반사율이 적다보니 차분하여 은은함을 주는 용지입니다. 아트지보다 조금 더 고급스러운 느낌을 줄수 있으나 비용 또한 저렴하여 브로슈어, 카탈로그, 포스터, 리플렛 의 제작에도 가장 많이 사용되는 용지 입니다." 
                        />
                        <GuideCard 
                            title="아트지" 
                            desc="광택이 있는 용지중 가장 많이 사용되는 순백색의 용지입니다. 종이가 매끄럽고 광택이 있어서 인쇄물의 내용을 선명하고 돋보이게 하는 것이 특징입니다. 광택으로 시각적 효과를 줄수 있음에도 가격이 저렴하다는 장점이있어서 각종 홍보 광고물(전단지, 포스터, 카탈로그, 리플렛)과 제품 카탈로그 등에 많이 사용됩니다." 
                        />
                        <GuideCard 
                            title="랑데뷰" 
                            desc="표면감, 두께감, 인쇄성, 건조성까지 국내 유통되는 용지 중 최고 수준의 품질을 자랑합니다. 고급스러운 브로셔나 카탈로그 등 높은 퀄리티를 요구하는 각종 인쇄물에 적합하며 유명 호텔 또는 대기업에서 매년 캘린더 용지로도 많이 사용되고 있습니다." 
                        />
                        <GuideCard 
                            title="띤또레또" 
                            desc="친환경 원단으로 유럽 전통 수공지의 감각을 현대적 기술로 제현한 것이 특징입니다. 부드러운 감촉과 은은한 펄프 엠보싱이 고급스러움을 더해줍니다. 다른 용지에 비해 가격이 조금 높은점 외에는 단점이 없는 최고급 용지 입니다." 
                        />
                        <GuideCard 
                            title="아르떼" 
                            desc="종이 표면에 특수 코팅을 입힌 용지로 부드러운 종이질감의 표면감과 은은함이 감도는 색상으로 고급감이 뛰어나며 색 재현성이 좋아 고급리플렛이나 카탈로그에 많이 사용되는 용지입니다." 
                        />
                        <GuideCard 
                            title="반누보" 
                            desc="특수지 중 부담스럽지 않은 가격대와 두툼한 두께감으로 인기가 좋은 재질 중 하나입니다. 특수용지 중 가장 대중적으로 선호하는 재질이며 표면에 광택이 없어 자연스러운 인쇄가 가능하고 종이 특유의 질감이 느껴지는 내츄럴한 색상으로 결과물로 확인시 고급스러운 느낌을 많이 주는 재질입니다." 
                        />
                        <GuideCard 
                            title="모조지" 
                            desc="백상지라고도 불리며 가장 종이느낌에 가까운 재질입니다. 스티커 등에서 종이 재질이 필요한 디자인의 경우 모조지가 많이 사용되며 면이 매끄럽고 비교적 가격이 저렴해 많이 사용되는 재질입니다. 신문형식의 리플렛이나 카탈로그 제작시 모조지에 인쇄를 하면 신문 특유의 느낌을 가장 잘 표현할 수 있습니다." 
                        />
                        <GuideCard 
                            title="스코틀랜드" 
                            desc="코팅이 되어 있지 않고 표면에 미세한 엠보처리가 되어 있는 비교적 두꺼운 용지입니다. 순백색으로 인쇄 잉크를 잘 흡수해 컬러감이 좋고 인쇄성이 아주 뛰어난 고급용지입니다." 
                        />
                    </div>
                </section>

                {/* 2. Paper Folding Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.engTitle}>Paper Folding Methods</span>
                        <h2 className={styles.korTitle}>리플렛 접지 종류</h2>
                        <p className={styles.sectionDesc}>
                            필요에 따라 접는 횟수를 달리해 다양한 정보를 전달할 수 있는 리플렛의 접지방법을 알려 드립니다.<br/>
                            기본적으로 가장 많이 사용되는 접지방법이며 디자인과 용도에 맞는 접지방법을 백고미디자인이 함께 고민해 드릴게요.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <GuideCard 
                            title="2단 접지" 
                            desc="가운데를 한번만 접는 방법으로 4페이지의 내용이 들어갑니다. 과거에는 가장 일반적인 접지 방식이었으나 최근에는 2단 접지보다는 3단 접지 형태로 많이 제작을 하고 있습니다. 들어가야 하는 정보가 많지 않은 경우라면 2단 접지를 추천해 드립니다." 
                        />
                        <GuideCard 
                            title="3단 접지" 
                            desc="가장 많이 제작되는 접지 형태로 총 6페이지의 내용이 들어갑니다. 기본 방식과 N접지 방식이 있으나 내지의 내용을 펼쳐 리플렛 다운 면모를 나타내기 위해서 기본 방식을 가장 많이 권해드립니다." 
                        />
                        <GuideCard 
                            title="4단 접지(기본)" 
                            desc="8페이지 내용 기재로 많은 정보를 전달해야 하는 경우 4단 접지를 추천해 드립니다. 관공서나 기관에서 가장 많이 선택하는 방식이며 여러가지 방식 가운데 기본형으로 반으로 접은 후 다시 반으로 접히는 형태입니다." 
                        />
                        <GuideCard 
                            title="4단 접지(대문)" 
                            desc='안쪽면은 마치 대문을 열고 보는것과 같은 방식이라 일명 "대문 접지"라고 불리는 방식입니다. 8페이지 내용 기재는 동일하며 4단 접지 중 가장 선호하는 접지 방식입니다.' 
                        />
                        <GuideCard 
                            title="4단 접지(병풍)" 
                            desc='병풍을 접고 열때와 동일하다 하여 "병풍 접지"라 불리는 방식입니다. 접지 방식에 따라 같은 디자인도 다른 느낌을 전달할 수 있으며 과거에는 병풍접지 선호도가 높았지만 최근에는 대문 접지 방식이 가장 많이 선택되고 있습니다. 하지만 직관적으로 정보를 전달하고자 한다면 병풍접지를 추천해 드립니다.' 
                        />
                    </div>
                </section>

                {/* 3. Post Processing Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.engTitle}>Post-print Processing</span>
                        <h2 className={styles.korTitle}>후가공 종류</h2>
                        <p className={styles.sectionDesc}>
                            적절한 후가공은 같은 제품이라도 다른 개성을 표현할 수 있습니다. 또한 디자인의 완성도를 더욱 높여주기도 합니다.<br/>
                            인쇄 후 적용할 수 있는 다양한 후가공의 종류를 알려드립니다.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        <GuideCard 
                            title="코팅(유광/무광)" 
                            desc="인쇄물의 표면을 보호하기 위해 만들어진 코팅은 유광과 무광코팅 중 선택이 가능합니다. 유광은 말그대로 광이 나는 코팅으로 깨끗하고 선명한 느낌을 주며 무광코팅은 은은한 느낌과 함께 상대적으로 고급스러운 느낌을 줍니다. 두가지 모두 외부에 얇은 코팅이 들어가기 때문에 잘 찢어지지 않으며 오염이나 습기, 갈라짐에 강합니다." 
                        />
                        <GuideCard 
                            title="박(금박/은박)" 
                            desc="표지에 로고나 타이틀등에 강한 시선을 끌기위해 사용되는 박은 주로 금박과 은박을 사용합니다. 로고나 제목등에 주로 쓰이지만 포인트를 주고 싶은 어디에나 제한없이 사용이 가능합니다. 박은 무광 코팅위에 하는게 가장 효과적인 후가공입니다. 개성을 살리고 고급스러운 느낌을 주지만 면적이 넓은 경우 그만큼 비용도 함께 올라가기 때문에 적당한 사이즈를 골라서 진행하는것이 좋습니다." 
                        />
                        <GuideCard 
                            title="에폭시" 
                            desc="투명 특수액을 사용해 원하는 부분만 볼록하면서 반짝이는 효과를 주는 후가공입니다. 유광의 반짝이는 광택 재질을 입히므로 무광택 용지 또는 무광 코팅위에서 그 효과가 더욱 더 선명해 집니다." 
                        />
                        <GuideCard 
                            title="형압" 
                            desc="원하는 부분에 양각(튀어나오게) 또는 음각(들어가게) 효과를 주는 방식입니다. 러프한 종이재질(아르떼, 반누보)에 사용시 형압만의 개성이 뚜렷해지며 단독으로 사용해도 효과가 좋지만 박 + 형압 효과를 함께 주면 그 개성이 더욱 더 살아나게 됩니다. 고급스러운 리플렛이나 카탈로그에는 박+형압효과가 함께 쓰이는 경우가 특히 많습니다." 
                        />
                    </div>
                </section>
            </div>
        </Layout>
    );
}

// 재사용 가능한 가이드 카드 컴포넌트
function GuideCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className={styles.card}>
            {/* 임시 이미지 플레이스홀더 */}
            <div className={styles.imagePlaceholder}>
                <span>Image (준비중)</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
        </div>
    );
}
