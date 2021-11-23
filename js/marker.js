var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(35.70703, 127.12642), // 지도의 중심좌표
    level: 10, // 지도의 확대 레벨
    mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
}; 

// 지도를 생성한다 
var map = new kakao.maps.Map(mapContainer, mapOption); 

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var positions = [
    {  
        content :
        '<div class="wrap">' +
        '    <div class="info">' + 
        '        <div class="title">' + 
        '            완주 로컬푸드 해피스테이션(하가점)' + 
        // '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
        '        </div>' + 
        '        <div class="body">' + 
        // '            <div class="img">' +
        // '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
        // '           </div>' + 
        '            <div class="desc">' + 
        '                <div class="ellipsis">전라북도 전주시 덕진구 덕진동2가 가련산로 26-1</div>' + 
        '                <div class="jibun">(시간) 10:00-21:00 연중무휴 (지번) 덕진동2가 395</div>' + 
        '                <div class="number">1600-0125</div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>',
        latlng: new kakao.maps.LatLng(35.841704624350804, 127.11217465735739)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            남원 원예 농협 한빛지점' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 남원시 오들로 49</div>' + 
    '                <div class="jibun ellipsis">(우) 55736 (지번) 월락동 129-14</div>' + 
    '                <div class="number">063-636-8715</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.422588722642644, 127.40061430483769)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            군산 농협 로컬푸드 직매장' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 군산시 번영로 162</div>' + 
    '                <div class="jibun ellipsis">(시간) 09:00-20:00 연중무휴 (지번) 조촌동 774</div>' + 
    '                <div class="number">063-450-6833</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.96472302076096, 126.73635055320356)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            익산 로컬푸드 직매장' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 익산시 동서로63길 57</div>' + 
    '                <div class="jibun ellipsis">(시간) 09:00-21:00 명절 당일 휴무 (지번) 어양동 481-1</div>' + 
    '                <div class="number">063-834-0701</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.95658924125505, 126.98340354022018)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            부안 로컬푸드 직매장' +  
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 부안군 부안읍 매창로 221</div>' + 
    '                <div class="jibun ellipsis">(시간) 10:00-21:00 명절 당일 휴무 (지번) 봉덕리 266</div>' + 
    '                <div class="number">063-582-6610</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.71938758775033, 126.74345765555991)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            무주 로컬푸드 직매장' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 무주군 설천면 만선1로 40</div>' + 
    '                <div class="jibun ellipsis">(지번) 심곡리 1124-10</div>' + 
    '                <div class="number">--------</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.90392385897281, 127.75353459781493)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            동김제 농협 로컬푸드 직매장' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 김제시 금구면 애통길 144</div>' + 
    '                <div class="jibun ellipsis">(시간) 09:00-20:00 명절 당일 휴무 (지번) 낙성리 441-1</div>' + 
    '                <div class="number">063-547-6633</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.817763832794654, 126.99730039740015)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            정읍 고모네 장터 로컬푸드 직매장' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 정읍시 북면 정읍북로 603</div>' + 
    '                <div class="jibun ellipsis">(시간) 매일 08:00-22:00 (지번) 화해리 69-10</div>' + 
    '                <div class="number">0507-1342-7738</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.61202317134481, 126.89228407090353)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            이엠푸드 고창 로컬푸드' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 고창군 고창읍 동리로 117</div>' + 
    '                <div class="jibun ellipsis">(지번) 읍내리 182-2</div>' + 
    '                <div class="number">063-564-3062</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.43297357860499, 126.70513126833161)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            장수 도깨비 로컬푸드' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 장수군 계남면 장안산로 5</div>' + 
    '                <div class="jibun ellipsis">(지번) 화음리 1133-8</div>' + 
    '                <div class="number">063-352-0947</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.7004938461946, 127.57743465370314)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            완주 로컬푸드 해피스테이션(삼천점)' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 전주시 완산구 삼천천변2길 33</div>' + 
    '                <div class="jibun ellipsis">(시간) 10:00-21:00 연중무휴 (지번) 삼천동1가 428-8</div>' + 
    '                <div class="number">1600-0125</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.79682100779212, 127.11374227090857)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            완주 로컬푸드 해피스테이션(모악산점)' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 완주군 구이면 모악산길 95</div>' + 
    '                <div class="jibun ellipsis">(시간) 09:00-21:00 연중무휴 (지번) 원기리 1069-11</div>' + 
    '                <div class="number">1600-0125</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.72958133194242, 127.10988939788682)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            순창군 농특산물 직판장' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전라북도 순창군 순창읍 민속마을길 5-4 정보화마을</div>' + 
    '                <div class="jibun ellipsis">(시간) 10:00-18:10 명절 당일 휴무 (지번) 백산리 265-3</div>' + 
    '                <div class="number">063-652-2289</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.368681750977856, 127.11049002485717)
},
{  
    content :
    '<div class="wrap">' +
    '    <div class="info">' + 
    '        <div class="title">' + 
    '            임실 로컬푸드 행복장터' + 
    '        </div>' + 
    '        <div class="body">' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">전북 임실군 오수면 순천완주고속도로 73</div>' + 
    '                <div class="jibun ellipsis">(지번) 오산리 675-18</div>' + 
    '                <div class="number">--------</div>' + 
    '            </div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>',
    latlng: new kakao.maps.LatLng(35.54085493220004, 127.30850502857464)
}
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "grape.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(30, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
    });

    var infowindow = new kakao.maps.InfoWindow({
         content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: positions[i].content,
        //content: positions[0].content,
        map: map,
        position: positions[i].latlng       
        //position: positions[0].latlng
    });

    /*// 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseout', function() {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        overlay.setMap(null);
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseover', function() {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        overlay.setMap(map);
    });*/

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener2(map,marker,overlay));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener2(overlay));

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map,marker,infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

function makeOverListener2(map, marker, overlay){
    return function(){
        overlay.setMap(map);
    };
}

function makeOutListener2(overlay){
    return function(){
        overlay.setMap(null);
    };
}

function makeOverListener(map, marker, infowindow){
    return function(){
        infowindow.open(map,marker);
    };
}

function makeOutListener(infowindow){
    return function(){
        infowindow.close();
    };
}
