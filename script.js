document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const screen1 = document.getElementById('screen-1');
    const screen2 = document.getElementById('screen-2');
    const screen3 = document.getElementById('screen-3');
    const rollWrapper = document.getElementById('roll-wrapper');
    const postaBlackScreen = document.getElementById('posta-black-screen');
    const postaBlackTitle = document.getElementById('posta-black-title');

    // Add Close button dynamically
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-close';
    closeBtn.innerText = 'Cerrar [X]';
    closeBtn.onclick = () => postaBlackScreen.classList.remove('active');
    postaBlackScreen.appendChild(closeBtn);

    // Destination UI
    const destUI = document.createElement('div');
    destUI.className = 'destination-ui';
    document.body.appendChild(destUI);

    // GeoJSON Data (Localidades)
    const sanMartinGeoJSON = {
        "type": "FeatureCollection",
        "name": "SAN MARTIN LOCALIDADES",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
            { "type": "Feature", "properties": { "id": 1, "Localidad": "José León Suárez", "siglas": "JLS" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.600151525149805, -34.490234643468206 ], [ -58.555532414864416, -34.528629575344041 ], [ -58.560725479380821, -34.533082112609918 ], [ -58.559900588266309, -34.533796862013112 ], [ -58.561517562326067, -34.535303694361524 ], [ -58.562276837101933, -34.534703773550959 ], [ -58.56878222839147, -34.540834214333884 ], [ -58.568501015511529, -34.54116229602716 ], [ -58.573000421590741, -34.544930548618503 ], [ -58.573206644369371, -34.54478056841586 ], [ -58.580049491114835, -34.549973632932279 ], [ -58.592591585560612, -34.539699989051421 ], [ -58.604833719601125, -34.53015749865844 ], [ -58.604196303739904, -34.526970419352338 ], [ -58.603952585910619, -34.525733082680553 ], [ -58.603746363131989, -34.525039424243339 ], [ -58.603521392828029, -34.524345765806132 ], [ -58.603333917574723, -34.523877077672878 ], [ -58.603090199745438, -34.523333399438307 ], [ -58.602790239340152, -34.522789721203736 ], [ -58.602340298732237, -34.522246042969165 ], [ -58.601946600700302, -34.521721112259925 ], [ -58.60160914524436, -34.521252424126672 ], [ -58.60149666009238, -34.520933716196062 ], [ -58.601327932364413, -34.520090077556212 ], [ -58.601384174940407, -34.51943391416966 ], [ -58.601421669991062, -34.518871488409765 ], [ -58.601552902668374, -34.518121587396557 ], [ -58.601684135345685, -34.517334191332701 ], [ -58.601702882871017, -34.516846755674116 ], [ -58.601890358124315, -34.516396815066194 ], [ -58.602002843276296, -34.515740651679643 ], [ -58.602171571004263, -34.514934508090455 ], [ -58.602359046257568, -34.51422210212791 ], [ -58.602471531409549, -34.513622181317352 ], [ -58.602602764086853, -34.513003512981463 ], [ -58.602696501713503, -34.512366097120243 ], [ -58.602659006662847, -34.511541206005717 ], [ -58.602546521510867, -34.51116625549912 ], [ -58.602509026460204, -34.510866295093834 ], [ -58.602246561105574, -34.509535220795406 ], [ -58.602096580902938, -34.508860309883524 ], [ -58.601909105649632, -34.507997923718342 ], [ -58.601684135345671, -34.507266770230473 ], [ -58.601477912567042, -34.506423131590623 ], [ -58.601327932364406, -34.505691978102746 ], [ -58.6011404571111, -34.504848339462896 ], [ -58.601009224433795, -34.504135933500358 ], [ -58.600877991756484, -34.503348537436494 ], [ -58.600746759079172, -34.502823606727254 ], [ -58.600671768977854, -34.502504898796644 ], [ -58.600090595692627, -34.501698755207457 ], [ -58.599771887762017, -34.501192572023541 ], [ -58.599640655084713, -34.500817621516944 ], [ -58.599190714476791, -34.500086468029075 ], [ -58.598778268919531, -34.499430304642523 ], [ -58.598459560988921, -34.498774141255971 ], [ -58.598384570887596, -34.498342948173381 ], [ -58.598347075836941, -34.497836764989465 ], [ -58.598478308514245, -34.497236844178907 ], [ -58.598609541191557, -34.496636923368342 ], [ -58.598909501596836, -34.495868274829817 ], [ -58.599303199628771, -34.495249606493921 ], [ -58.599678150135368, -34.494930898563311 ], [ -58.600109343217959, -34.494462210430065 ], [ -58.60033431352192, -34.494237240126104 ], [ -58.600521788775225, -34.493881037144831 ], [ -58.60065302145253, -34.493487339112903 ], [ -58.600765506604503, -34.493093641080968 ], [ -58.600821749180497, -34.492793680675689 ], [ -58.600821749180497, -34.492324992542436 ], [ -58.600821749180497, -34.49196878956117 ], [ -58.600728011553841, -34.491481353902586 ], [ -58.60061552640186, -34.491012665769333 ], [ -58.60050304124988, -34.490656462788067 ], [ -58.600390556097899, -34.490450240009437 ], [ -58.600151525149805, -34.490234643468206 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 2, "Localidad": "Loma Hermosa", "siglas": "LM" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.604833856967204, -34.530157694238433 ], [ -58.582483411423283, -34.547981197259631 ], [ -58.583786900541597, -34.551296942424464 ], [ -58.584327557078026, -34.552324189843688 ], [ -58.585381837324071, -34.555162636659958 ], [ -58.586841609972439, -34.559055363722265 ], [ -58.587976988698955, -34.562083040326286 ], [ -58.58770666043074, -34.562191171633572 ], [ -58.587544463469811, -34.562353368594501 ], [ -58.58751743064299, -34.562515565555429 ], [ -58.587544463469811, -34.56270479534318 ], [ -58.587652594777097, -34.562921057957752 ], [ -58.587868857391669, -34.563029189265038 ], [ -58.588058087179419, -34.563029189265038 ], [ -58.58824731696717, -34.563029189265038 ], [ -58.590543312098369, -34.568859251316724 ], [ -58.618209516203599, -34.547404241349504 ], [ -58.617749494502284, -34.547382260677779 ], [ -58.617256145403537, -34.547294403988964 ], [ -58.616769554511627, -34.547037592129342 ], [ -58.61628972182654, -34.546719956408232 ], [ -58.616141041276236, -34.546598308685255 ], [ -58.615884229416615, -34.546348255032463 ], [ -58.615613901143327, -34.546118476000167 ], [ -58.615289507215387, -34.545875180554212 ], [ -58.615046211769425, -34.545692708969746 ], [ -58.61480291632347, -34.545530512005776 ], [ -58.614620444739003, -34.545388589662302 ], [ -58.614329841845219, -34.545104744975347 ], [ -58.613998689710449, -34.544753318220074 ], [ -58.612747970899385, -34.543468780215647 ], [ -58.61219554380925, -34.542493908880111 ], [ -58.611513133874375, -34.541259071855094 ], [ -58.611025698206603, -34.54035731586972 ], [ -58.61044077540528, -34.539284957400632 ], [ -58.610132066149028, -34.538830017444042 ], [ -58.609807109037185, -34.538212598931537 ], [ -58.609449656214153, -34.537692667552584 ], [ -58.609287177658231, -34.537367710440741 ], [ -58.609075955535531, -34.536945266195339 ], [ -58.60881598984605, -34.536571565516716 ], [ -58.608539776300987, -34.536214112693685 ], [ -58.608214819189136, -34.535889155581842 ], [ -58.607743631376962, -34.535417967769668 ], [ -58.60749991354308, -34.535141754224597 ], [ -58.607337434987151, -34.534979275668675 ], [ -58.606947486452938, -34.534833044968344 ], [ -58.606541290063134, -34.534638070701234 ], [ -58.606313820084843, -34.534426848578534 ], [ -58.605972615117402, -34.53410189146669 ], [ -58.605842632272662, -34.53390691719958 ], [ -58.60574514513911, -34.533744438643659 ], [ -58.605631410149961, -34.533581960087737 ], [ -58.605452683738449, -34.533354490109446 ], [ -58.605322700893709, -34.533078276564375 ], [ -58.605241461615748, -34.532964541575232 ], [ -58.605208965904559, -34.532769567308122 ], [ -58.605111478771008, -34.532412114485091 ], [ -58.605062735204228, -34.532119653084429 ], [ -58.605046487348638, -34.531859687394956 ], [ -58.605013991637456, -34.531648465272255 ], [ -58.604981495926268, -34.531307260304814 ], [ -58.604981495926268, -34.53109603818212 ], [ -58.604900256648307, -34.530917311770601 ], [ -58.604900256648307, -34.53077108107027 ], [ -58.604867760937125, -34.530608602514349 ], [ -58.604851513081535, -34.530429876102836 ], [ -58.604833856967204, -34.530157694238433 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 3, "Localidad": "Villa  Ballester", "siglas": "VB" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.587526635621664, -34.562580002061608 ], [ -58.587517364025651, -34.562515391428335 ], [ -58.587544052549624, -34.562353728975708 ], [ -58.587706590035836, -34.562190972731102 ], [ -58.587977194168346, -34.562083124843198 ], [ -58.58433946084623, -34.552331969461996 ], [ -58.58377943935939, -34.551274928905578 ], [ -58.582484389671059, -34.547984802670392 ], [ -58.580041295934713, -34.54997287894868 ], [ -58.573209033795273, -34.54478918006113 ], [ -58.572999025737708, -34.544929185432835 ], [ -58.568511853574392, -34.541163040933824 ], [ -58.568784864049228, -34.540834028310307 ], [ -58.562281614533291, -34.53470879329798 ], [ -58.561511584988885, -34.535303816127751 ], [ -58.559915523751386, -34.533784757844693 ], [ -58.560720554638721, -34.533070730448969 ], [ -58.555540355885434, -34.528632560165768 ], [ -58.555540355885434, -34.528625559897179 ], [ -58.537780674483997, -34.544188907029941 ], [ -58.549257614829955, -34.556540880949093 ], [ -58.546177496652327, -34.559004975491192 ], [ -58.549285615904296, -34.561693078628032 ], [ -58.550937679290477, -34.565781235481971 ], [ -58.551301693256924, -34.567125287050388 ], [ -58.553653783501659, -34.571129440681304 ], [ -58.558329962916787, -34.567524302359764 ], [ -58.558889984403628, -34.567230291079177 ], [ -58.579176762764455, -34.562764119721614 ], [ -58.580338807349655, -34.562610113812731 ], [ -58.582312883090765, -34.56256811220122 ], [ -58.587525895603036, -34.562579268879261 ], [ -58.587526635621664, -34.562580002061608 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 4, "Localidad": "Billinghurst", "siglas": "B" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.590543312102817, -34.568859251287847 ], [ -58.588248096757212, -34.563028860561637 ], [ -58.58786658199724, -34.563028860561637 ], [ -58.587653073737073, -34.562920356363847 ], [ -58.587544569539283, -34.56270509803597 ], [ -58.587527068862222, -34.562579093161119 ], [ -58.582364369128634, -34.562560717450204 ], [ -58.580320290047673, -34.562602719075151 ], [ -58.579221247528118, -34.56275672503331 ], [ -58.558906461593359, -34.567226397955196 ], [ -58.558332439385694, -34.567520409329859 ], [ -58.553677259286921, -34.571125548804822 ], [ -58.552067196997122, -34.572469600803267 ], [ -58.54824504912655, -34.575535719424714 ], [ -58.547923036668593, -34.575927734590927 ], [ -58.547811032335389, -34.576053739465777 ], [ -58.559011465655736, -34.585448102913219 ], [ -58.564107662816497, -34.589690267033298 ], [ -58.569791882726577, -34.585168967114086 ], [ -58.571709956932693, -34.583658658683532 ], [ -58.572205226093587, -34.583254393043376 ], [ -58.573050508795724, -34.582606867992041 ], [ -58.574121550231993, -34.581752834951359 ], [ -58.574685072033425, -34.581315318024778 ], [ -58.576302134594059, -34.580036018531466 ], [ -58.590125919406304, -34.569175535862961 ], [ -58.590543966829657, -34.568862000295447 ], [ -58.590543312102817, -34.568859251287847 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 5, "Localidad": "San Andrés", "siglas": "SA" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.52981246099688, -34.53733343676717 ], [ -58.528870821978451, -34.539067008577575 ], [ -58.527582772139766, -34.541671109338388 ], [ -58.529031828208282, -34.542385136966352 ], [ -58.526658736385933, -34.545010238539746 ], [ -58.524612469709474, -34.550440261144331 ], [ -58.523670933278481, -34.551910536783858 ], [ -58.523019908088301, -34.552759319625906 ], [ -58.522944655176538, -34.552874824095127 ], [ -58.522783648946707, -34.553112833304446 ], [ -58.522461636487044, -34.553522349149887 ], [ -58.521115725034534, -34.555262353976062 ], [ -58.523923435236121, -34.557893608131273 ], [ -58.536180034482307, -34.569069103046154 ], [ -58.537562170969274, -34.567292835586414 ], [ -58.539984920951781, -34.569381596084902 ], [ -58.541587107937957, -34.570775525013907 ], [ -58.547812098773356, -34.576054166736519 ], [ -58.548245240530967, -34.575535271661259 ], [ -58.553660387534777, -34.571139976613928 ], [ -58.551302171298929, -34.567130352737649 ], [ -58.551298671163515, -34.567109351925154 ], [ -58.550941657351188, -34.56578630073831 ], [ -58.549285614765779, -34.561693076947982 ], [ -58.546178219156005, -34.559004962696129 ], [ -58.549257463285954, -34.556543054949714 ], [ -58.540554376580545, -34.547177567617311 ], [ -58.537782269333142, -34.544188451974279 ], [ -58.536833732636119, -34.543199663720003 ], [ -58.533473602639276, -34.539622525327523 ], [ -58.52981246099688, -34.53733343676717 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 6, "Localidad": "Villa Maipú", "siglas": "VM" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.536180034482257, -34.569069103259963 ], [ -58.536180034118765, -34.569069102490118 ], [ -58.53523173131839, -34.568204324640611 ], [ -58.521116191834324, -34.55526279152523 ], [ -58.521116003518273, -34.555262614745281 ], [ -58.521115854617221, -34.55526247556444 ], [ -58.521115770446457, -34.555262396627654 ], [ -58.521115725049796, -34.5552623540082 ], [ -58.514324096830833, -34.564429154790616 ], [ -58.513176052345443, -34.565899211753617 ], [ -58.51082396120465, -34.567992292858072 ], [ -58.510795960119644, -34.568030794349959 ], [ -58.509955927569358, -34.569234841005368 ], [ -58.516893196380451, -34.584110417416653 ], [ -58.522304406058538, -34.581726825055227 ], [ -58.528072629570495, -34.57908072252183 ], [ -58.528534647473151, -34.578814712214246 ], [ -58.529514685448483, -34.578212688886538 ], [ -58.527638612752838, -34.576630627583512 ], [ -58.528814658323235, -34.575762593948212 ], [ -58.531082746209002, -34.574068528305141 ], [ -58.533056822702171, -34.572514468087114 ], [ -58.534610882920198, -34.571240418719185 ], [ -58.536180034482257, -34.569069103259963 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 7, "Localidad": "Villa Lynch", "siglas": "VL" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.547806488997864, -34.576049409742787 ], [ -58.537256384724834, -34.584655622979298 ], [ -58.529514690479395, -34.578212690266092 ], [ -58.529512875286457, -34.578213798299501 ], [ -58.529018741933044, -34.578517476024452 ], [ -58.528573078284914, -34.578790754897959 ], [ -58.528433556159634, -34.578873199790166 ], [ -58.528067454715192, -34.579083636053511 ], [ -58.527876044196205, -34.579170693247384 ], [ -58.527255689622628, -34.579455502875035 ], [ -58.526599589711154, -34.579755879020787 ], [ -58.520137297413221, -34.58268141823924 ], [ -58.520137102184201, -34.582681504100599 ], [ -58.516893196380401, -34.584110417416639 ], [ -58.523066593803435, -34.597367567721477 ], [ -58.562326481465178, -34.591391247707321 ], [ -58.563687441487417, -34.590007220566058 ], [ -58.564102649629795, -34.589675054052158 ], [ -58.547806488997864, -34.576049409742787 ] ] ] ] } },
            { "type": "Feature", "properties": { "id": 8, "Localidad": "San Martín", "siglas": "SM" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -58.537562170970062, -34.567292835587963 ], [ -58.536180034482413, -34.569069103046154 ], [ -58.534610882919907, -34.571240418719434 ], [ -58.527638612752803, -34.57663062758354 ], [ -58.537255397766344, -34.584653138021153 ], [ -58.547806456108802, -34.576049110848359 ], [ -58.537562170970062, -34.567292835587963 ] ] ] ] } }
        ]
    };

    let trainCoords = [];
    if (typeof trainGeoJSON !== 'undefined') {
        const points = trainGeoJSON.features.map(f => f.geometry.coordinates);
        const uniquePoints = Array.from(new Set(points.map(JSON.stringify))).map(JSON.parse);
        uniquePoints.sort((a, b) => b[0] - a[0]); // East to West
        trainCoords = uniquePoints;
    }
    const trainLineGeoJSON = { type: 'Feature', geometry: { type: 'LineString', coordinates: trainCoords } };

    // Coordinates (Using standard locations)
    const coordsCenter = [-58.5600, -34.5450]; // aerial overview
    
    // Geodesy setup
    proj4.defs("EPSG:22183","+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
    
    let p1Coord = [-58.5450, -34.5820]; // Fallback hasta que cargue POSTAS 1 Y 2.geojson
    let p2Coord = [-58.5320, -34.5800]; // Fallback hasta que cargue POSTAS 1 Y 2.geojson
    // Postas 1 y 2 vienen de POSTAS 1 Y 2.geojson; postas 3-9 son las 7 estaciones del tren
    let fullPathArray = [p1Coord, p2Coord, ...trainCoords];
    
    const postaColors = [
        '#ff0055', '#00ff55', '#0055ff', '#ffdd00', '#ff00ff',
        '#00ffff', '#ff7700', '#7700ff', '#00ffaa', '#ffaa00'
    ];
    
    window.isAnimationPaused = false;
    document.getElementById('btn-close-modal').addEventListener('click', () => {
        document.getElementById('embedded-modal').classList.add('hidden');
        window.isAnimationPaused = false;
    });


    // State Machine
    let mapPhase = -1; 
    let currentPathIndex = 0; 

    const postasText = [
        "Posta 1: Punto de partida",
        "Posta 2: Mirador: afinar lo que vemos",
        "Posta 3: Situación problemática",
        "Posta 4: Pregunta de investigación",
        "Posta 5: Objetivos",
        "Posta 6: Hipótesis",
        "Posta 7: Antecedentes",
        "Posta 8: Equipaje metodológico",
        "Posta 9: Conclusiones"
    ];

    const map = new maplibregl.Map({
        container: 'map',
        style: {
            version: 8,
            glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
            sources: { 'esri-satellite': { type: 'raster', tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'], tileSize: 256 } },
            layers: [ { id: 'satellite-layer', type: 'raster', source: 'esri-satellite', minzoom: 0, maxzoom: 22 } ]
        },
        center: coordsCenter,
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
        interactive: false,
        antialias: true
    });

    let mainPinwheelMarker;
    let depotMarker = null;
    
    // Load Postas coordinates
    fetch('POSTAS 1 Y 2.geojson').then(res => res.json()).then(data => {
        const f1 = data.features.find(f => f.properties.id === 1);
        const f2 = data.features.find(f => f.properties.id === 2);
        if (f1) p1Coord = proj4("EPSG:22183", "EPSG:4326", f1.geometry.coordinates[0]);
        if (f2) p2Coord = proj4("EPSG:22183", "EPSG:4326", f2.geometry.coordinates[0]);
        
        const savedP1 = localStorage.getItem('p1Coord_manual');
        if (savedP1) p1Coord = JSON.parse(savedP1);

        fullPathArray[0] = p1Coord;
        fullPathArray[1] = p2Coord;
    }).catch(e => {
        console.error("Error loading postas", e);
        const savedP1 = localStorage.getItem('p1Coord_manual');
        if (savedP1) {
            p1Coord = JSON.parse(savedP1);
            fullPathArray[0] = p1Coord;
        }
    });
    let pinwheelDiv;
    let postaScreenEl;

    // ----- THREE.JS CUSTOM LAYER FOR ATALAYA -----
    // Configuration parameters for the 3D model (edificio_tda)
    const edificio_tda = {
        modelPath: 'edificio_ventanas_negras.glb',
        origin: p2Coord,
        altitude: 0,
        scale: 25, // Size modifier
        rotationX: Math.PI / 2, 
        rotationY: 0,
        rotationZ: 0 // Adjust if model faces wrong direction
    };

    const customLayer3D = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function (map, gl) {
            this.camera = new THREE.Camera();
            this.scene = new THREE.Scene();
            
            // Add lighting
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(0, -70, 100).normalize();
            this.scene.add(directionalLight);
            
            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight2.position.set(0, 70, 100).normalize();
            this.scene.add(directionalLight2);
            
            this.scene.add(new THREE.AmbientLight(0xffffff, 0.4));
            
            // MapLibre uses Mercator coordinates. Convert LngLat to mercator.
            const mercatorCoord = maplibregl.MercatorCoordinate.fromLngLat(edificio_tda.origin, edificio_tda.altitude);
            
            // Compute scale to convert mercator to meters
            const scale = mercatorCoord.meterInMercatorCoordinateUnits() * edificio_tda.scale;
            
            // Transformation matrix for the model
            this.matrix = new THREE.Matrix4()
                .makeTranslation(mercatorCoord.x, mercatorCoord.y, mercatorCoord.z)
                .scale(new THREE.Vector3(scale, -scale, scale))
                .multiply(new THREE.Matrix4().makeRotationX(edificio_tda.rotationX))
                .multiply(new THREE.Matrix4().makeRotationY(edificio_tda.rotationY))
                .multiply(new THREE.Matrix4().makeRotationZ(edificio_tda.rotationZ));

            const loader = new THREE.GLTFLoader();
            
            // 1. Load Atalaya building
            loader.load('atalaya_3d.glb', (gltf) => {
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        child.material.roughness = 0.2;
                        child.material.metalness = 0.8;
                    }
                });
                this.scene.add(gltf.scene);
            });

            // 2. Load Edificio TDA (Ventanas negras)
            loader.load(edificio_tda.modelPath, (gltf) => {
                this.model = gltf.scene;
                this.model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.roughness = 0.3;
                        child.material.metalness = 0.7;
                    }
                });
                // Optional offset to separate them if they overlap
                this.model.position.set(30, 0, 0); 
                this.scene.add(this.model);
            });

            // 3. Add solid white hemisphere to replace Carpa Circo
            const sphereGeo = new THREE.SphereGeometry(12, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
            const sphereMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.1 });
            const hemisphere = new THREE.Mesh(sphereGeo, sphereMat);
            // Position it where the carpa is roughly located
            hemisphere.position.set(-20, 0, 10);
            this.scene.add(hemisphere);
            
            this.map = map;
            this.renderer = new THREE.WebGLRenderer({
                canvas: map.getCanvas(),
                context: gl,
                antialias: true
            });
            this.renderer.autoClear = false;
        },
        render: function (gl, matrix) {
            if (mapPhase < 2) return; // Hide before reaching Posta 2

            const m = new THREE.Matrix4().fromArray(matrix);
            // Apply model transformation to the map's view matrix
            const l = new THREE.Matrix4().multiplyMatrices(m, this.matrix);
            
            this.camera.projectionMatrix = l;
            
            this.renderer.state.reset();
            this.renderer.render(this.scene, this.camera);
            this.map.triggerRepaint();
        }
    };

    map.on('load', () => {
        // All localities borders
        map.addSource('san-martin-shape', { type: 'geojson', data: sanMartinGeoJSON });
        
        // Active Highlight Fill (illuminates entire locality)
        map.addLayer({
            id: 'san-martin-active-fill', type: 'fill', source: 'san-martin-shape',
            paint: { 
                'fill-color': [
                    'match',
                    ['get', 'id'],
                    1, '#ff0000', // Red
                    2, '#0000ff', // Blue
                    3, '#ffff00', // Yellow
                    4, '#00ff00', // Green
                    5, '#ff0000',
                    6, '#0000ff',
                    7, '#ffff00',
                    8, '#00ff00',
                    '#ff00ff'
                ],
                'fill-opacity': 0.3 
            },
            filter: ['==', 'id', -1] // Initially hide all
        });
        
        // Locality Labels (floating text, for active-highlight only)
        map.addLayer({
            id: 'san-martin-active-labels',
            type: 'symbol',
            source: 'san-martin-shape',
            layout: {
                'text-field': ['get', 'Localidad'],
                'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                'text-size': 24,
                'text-anchor': 'center'
            },
            paint: {
                'text-color': '#ffffff',
                'text-halo-color': '#000000',
                'text-halo-width': 2
            },
            filter: ['==', 'id', -1]
        });

        // Base Glowing Borders (always visible)
        map.addLayer({
            id: 'san-martin-base-glow', type: 'line', source: 'san-martin-shape',
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': '#00d4ff', 'line-width': 12, 'line-blur': 8, 'line-opacity': 0.85 }
        });

        // Active Highlight Glow
        map.addLayer({
            id: 'san-martin-active-glow', type: 'line', source: 'san-martin-shape',
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': '#ff00ff', 'line-width': 35, 'line-blur': 20, 'line-opacity': 1 },
            filter: ['==', 'id', -1]
        });
        
        map.addLayer({
            id: 'san-martin-core', type: 'line', source: 'san-martin-shape',
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: { 'line-color': '#ffffff', 'line-width': 3 }
        });
        map.addLayer({
            id: 'san-martin-labels', type: 'symbol', source: 'san-martin-shape',
            layout: { 'text-field': ['get', 'Localidad'], 'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'], 'text-size': 20, 'text-anchor': 'center' },
            paint: {
                'text-color': ['match', ['get', 'id'], 1, '#00d4ff', 2, '#00ff88', 3, '#ff2a55', 4, '#ffaa00', 5, '#00d4ff', 6, '#00ff88', 7, '#ff2a55', 8, '#ffaa00', '#ffffff'],
                'text-halo-color': 'rgba(0,0,0,0.8)', 'text-halo-width': 3
            }
        });

        // Train Lines
        map.addSource('train-line-source', { type: 'geojson', data: trainLineGeoJSON });
        map.addLayer({ id: 'train-line-glow', type: 'line', source: 'train-line-source', paint: { 'line-color': '#00ff00', 'line-width': 20, 'line-blur': 15, 'line-opacity': 0.5 } });
        map.addLayer({ id: 'train-line-ties', type: 'line', source: 'train-line-source', paint: { 'line-color': '#00ff00', 'line-width': 12, 'line-dasharray': [0.1, 1.5], 'line-blur': 1 } });
        map.addLayer({ id: 'train-line-rails', type: 'line', source: 'train-line-source', paint: { 'line-color': '#ffffff', 'line-width': 3 } });

        // Add 3D Building Layer
        map.addLayer(customLayer3D);

        // Cyan Pins for all Postas (1 to 9)
        fullPathArray.forEach((coord, i) => {
            const el = document.createElement('div');
            el.className = 'cyan-pin-marker';
            if (i === 0) { // Posta 1 (Draggable)
                el.title = "Arrstrame para cambiar el inicio";
                el.style.cursor = "grab";
                const marker = new maplibregl.Marker({ element: el, anchor: 'bottom', draggable: true }).setLngLat(coord).addTo(map);
                marker.on('dragend', () => {
                    const newLngLat = marker.getLngLat();
                    const newCoord = [newLngLat.lng, newLngLat.lat];
                    localStorage.setItem('p1Coord_manual', JSON.stringify(newCoord));
                    p1Coord = newCoord;
                    fullPathArray[0] = newCoord;
                    if (mapPhase === 0 && mainPinwheelMarker) {
                        mainPinwheelMarker.setLngLat(p1Coord);
                    }
                    console.log("Posta 1 reubicada en: " + newCoord);
                });
            } else {
                new maplibregl.Marker({ element: el, anchor: 'bottom' }).setLngLat(coord).addTo(map);
            }
        });

        // Train container
        pinwheelDiv = document.createElement('div');
        pinwheelDiv.className = 'pinwheel-train';
        pinwheelDiv.style.display = 'none';
        
        // Posta Clickable Popup
        postaScreenEl = document.createElement('div');
        postaScreenEl.className = 'posta-screen';
        postaScreenEl.onclick = (e) => {
            e.stopPropagation();
            window.isAnimationPaused = true;
            document.getElementById('modal-title').innerText = postasText[currentPathIndex];
            document.getElementById('embedded-modal').classList.remove('hidden');
        };
        pinwheelDiv.appendChild(postaScreenEl);

        mainPinwheelMarker = new maplibregl.Marker({ element: pinwheelDiv, anchor: 'center' }).setLngLat(p1Coord).addTo(map);

        // Posta Labels for Phase 0
        window.postaLabels = [];
        fullPathArray.forEach((coord, i) => {
            if (i >= postasText.length) return;
            const el = document.createElement('div');
            el.className = 'posta-label visible';
            el.innerText = postasText[i].split(':')[0];
            new maplibregl.Marker({element: el, anchor: 'left', offset: [15, 0]}).setLngLat(coord).addTo(map);
            window.postaLabels.push(el);
        });

        // Posta 1 GIF marker
        const p1El = document.createElement('img');
        p1El.src = 'posta1.gif';
        p1El.className = 'posta1-gif';
        window.posta1MarkerEl = p1El;
        new maplibregl.Marker({element: p1El, anchor: 'bottom'}).setLngLat(fullPathArray[0]).addTo(map);

        // Posta 2 Atalaya GIF marker
        const p2El = document.createElement('img');
        p2El.src = 'posta2.gif';
        p2El.className = 'posta1-gif';
        p2El.style.width = '765px'; // ~1.7x Posta 1 (900 * 0.85)
        p2El.style.zIndex = 10;
        window.posta2MarkerEl = p2El;
        new maplibregl.Marker({element: p2El, anchor: 'bottom'}).setLngLat(fullPathArray[1]).addTo(map);

        const depotConf = JSON.parse(localStorage.getItem('depotConfig') || '{"size": 720, "offX": 0, "offY": 0}');

        // Posta 3 Depot
        const depot3El = document.createElement('img');
        depot3El.src = 'deposito_animado.gif';
        depot3El.className = 'posta1-gif';
        depot3El.style.width = depotConf.size + 'px';
        depot3El.style.zIndex = 100;
        window.depot3MarkerEl = depot3El;
        window.depot3MarkerObj = new maplibregl.Marker({element: depot3El, anchor: 'bottom', offset: [depotConf.offX, depotConf.offY]}).setLngLat(fullPathArray[2]).addTo(map);

        // Miguelete.gif al costado del depósito de Posta 3
        const migEl = document.createElement('img');
        migEl.src = 'miguelete.gif';
        migEl.className = 'posta1-gif locality-gif';
        window.migueletMarkerEl = migEl;
        new maplibregl.Marker({element: migEl, anchor: 'bottom', offset: [600, 0]}).setLngLat(fullPathArray[2]).addTo(map);

        // GIFs de localidades en Postas 4-8 (índices 3-7)
        const localityGifs = [
            { src: 'san_martin.gif',      idx: 3 },
            { src: 'san_andres.gif',      idx: 4 },
            { src: 'villa_ballester.gif', idx: 5 },
            { src: 'malaver.gif',         idx: 6 },
            { src: 'chilavert.gif',       idx: 7 },
        ];
        window.localityGifEls = [];
        localityGifs.forEach(({ src, idx }) => {
            if (idx >= fullPathArray.length) return;
            const el = document.createElement('img');
            el.src = src;
            el.className = 'posta1-gif locality-gif';
            window.localityGifEls.push(el);
            new maplibregl.Marker({element: el, anchor: 'bottom'}).setLngLat(fullPathArray[idx]).addTo(map);
        });

        // José L. Suárez al lado (antes) del depósito de Posta 9
        const jlsEl = document.createElement('img');
        jlsEl.src = 'jose_l_suarez.gif';
        jlsEl.className = 'posta1-gif locality-gif';
        window.jlsMarkerEl = jlsEl;
        new maplibregl.Marker({element: jlsEl, anchor: 'bottom'}).setLngLat(fullPathArray[fullPathArray.length - 2]).addTo(map);

        // Posta 9 Depot (final)
        const depot10El = document.createElement('img');
        depot10El.src = 'deposito_tren_final.gif';
        depot10El.className = 'posta1-gif';
        depot10El.style.width = depotConf.size + 'px';
        depot10El.style.zIndex = 50;
        window.depot10MarkerEl = depot10El;
        window.depot10MarkerObj = new maplibregl.Marker({element: depot10El, anchor: 'bottom', offset: [depotConf.offX, depotConf.offY]}).setLngLat(fullPathArray[fullPathArray.length - 1]).addTo(map);
    });

    // Interpolación suave de ángulos para evitar rotación brusca al inicio
    function lerpAngle(a, b, t) {
        let d = ((b - a + 540) % 360) - 180;
        return a + d * t;
    }

    // Horizontal Trail Confetti (sticks to map)
    function spawnConfetti(coord, amount = 1, forceRadius = 40) {
        for(let i=0; i<amount; i++) {
            const el = document.createElement('div');
            el.className = 'confetti-particle';
            const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            // Random offset in meters (roughly)
            const lngOff = (Math.random() - 0.5) * 0.0001 * (forceRadius/40);
            const latOff = (Math.random() - 0.5) * 0.0001 * (forceRadius/40);
            const m = new maplibregl.Marker({ element: el }).setLngLat([coord[0]+lngOff, coord[1]+latOff]).addTo(map);
            setTimeout(() => m.remove(), 2000);
        }
    }
    
    function spawnSparkle(coord) {
        const el = document.createElement('div');
        el.className = 'magic-sparkle';
        el.style.backgroundColor = '#0ff';
        el.style.boxShadow = `0 0 10px #0ff`;
        const m = new maplibregl.Marker({ element: el }).setLngLat(coord).addTo(map);
        setTimeout(() => m.remove(), 2000);
    }

    // Full-screen celebration for Posta 9 arrival
    function spawnFullScreenCelebration() {
        const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f', '#ff6600', '#fff'];
        const flash = document.createElement('div');
        flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9000;pointer-events:none;transition:background 0.1s;';
        document.body.appendChild(flash);
        let fc = 0;
        const fi = setInterval(() => {
            flash.style.background = `${colors[fc % colors.length]}55`;
            fc++;
            if (fc >= 20) { clearInterval(fi); flash.remove(); }
        }, 150);

        const W = window.innerWidth, H = window.innerHeight;
        for (let i = 0; i < 400; i++) {
            setTimeout(() => {
                const c = document.createElement('div');
                const sz = Math.random() * 14 + 5;
                c.style.cssText = `position:fixed;left:${Math.random()*W}px;top:${Math.random()*H}px;width:${sz}px;height:${sz}px;background:${colors[Math.floor(Math.random()*colors.length)]};z-index:9001;pointer-events:none;border-radius:${Math.random()>0.5?'50%':'2px'};animation:confettiFall 2.5s ease-out forwards;`;
                document.body.appendChild(c);
                setTimeout(() => c.remove(), 2600);
            }, Math.random() * 2500);
        }
    }

    // Track current locality for name display
    let lastLocalityId = -1;

    let isMoving = false;
    let pathHistory = [];
    window.trainMarkers = [];

    let railNetwork = null;
    fetch('trainTrackGeometry.geojson').then(res => res.json()).then(data => {
        railNetwork = data;
    }).catch(e => console.error("Could not load rail network", e));

    async function moveToPoint(startIndex, endIndex, mode = 'train') {
        if (isMoving) return;
        isMoving = true;
        
        const start = fullPathArray[startIndex];
        const end = fullPathArray[endIndex];
        
        // Remove any old arrow from pinwheelDiv (now shown next to Destino label instead)
        const oldArrow = pinwheelDiv.querySelector('.train-direction-arrow');
        if (oldArrow) oldArrow.remove();
        
        let pathLine = null;

        if (mode === 'street') {
            try {
                // Fetch OSRM route (driving mode follows streets)
                const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&overview=full`;
                const res = await fetch(osrmUrl);
                const data = await res.json();
                if (data.routes && data.routes.length > 0) {
                    pathLine = data.routes[0].geometry;
                }
            } catch (e) { console.error("OSRM routing failed", e); }
        }

        // Fallback to straight line if no pathLine or not street mode
        if (!pathLine) {
            pathLine = { type: 'LineString', coordinates: [start, end] };
        }

        if (mode === 'train' && railNetwork && typeof turf !== 'undefined') {
            // Sample the straight line and snap to actual tracks
            const straightLine = turf.lineString([start, end]);
            const length = turf.length(straightLine, {units: 'kilometers'});
            const steps = Math.max(10, Math.floor(length * 50)); // ~20m steps
            const newCoords = [];
            for (let i = 0; i <= steps; i++) {
                const pt = turf.along(straightLine, (i/steps)*length, {units: 'kilometers'});
                let closest = null;
                let minDist = Infinity;
                railNetwork.features.forEach(f => {
                    if (f.geometry.type === 'LineString') {
                        const snapped = turf.nearestPointOnLine(f, pt);
                        if (snapped.properties.dist < minDist) {
                            minDist = snapped.properties.dist;
                            closest = snapped.geometry.coordinates;
                        }
                    }
                });
                if (closest && minDist < 0.4) { // 400m snap tolerance
                    newCoords.push(closest);
                } else {
                    newCoords.push(pt.geometry.coordinates);
                }
            }
            // Remove adjacent duplicates to prevent turf.along from breaking
            const dedupedCoords = newCoords.filter((c, idx) => {
                if (idx === 0) return true;
                const prev = newCoords[idx-1];
                return c[0] !== prev[0] || c[1] !== prev[1];
            });
            if (dedupedCoords.length > 1) {
                pathLine = { type: 'LineString', coordinates: dedupedCoords };
            }
        }

        const line = turf.lineString(pathLine.coordinates);
        const distance = turf.length(line, { units: 'kilometers' });
        
        // Calculate realistic frames (speed) based on distance
        // Train: 50 km/h, Bus: 40 km/h, Drone: 100 km/h
        let speedKmh = 40;
        if (mode === 'train') speedKmh = 50;
        if (mode === 'flight') speedKmh = 100;
        
        // Time lapse multiplier (make the simulation 20x faster than real life so it doesn't take 5 minutes)
        const SIMULATION_SPEEDUP = 15;
        
        // Time in hours = distance / (speed * speedup)
        const durationHours = distance / (speedKmh * SIMULATION_SPEEDUP);
        const durationSecs = durationHours * 3600;
        
        // Ensure animation takes at least 5 seconds but no more than 40 seconds
        const clampedSecs = Math.max(5, Math.min(40, durationSecs));
        
        // Assuming 60 frames per second
        const totalFrames = Math.floor(clampedSecs * 60); 
        
        if ((startIndex === 0 && endIndex === 1) || (startIndex === 1 && endIndex === 0)) {
            const interText = document.getElementById('inter-posta-text');
            if (interText) interText.classList.add('visible');
            // Se oculta en el bloque frame >= totalFrames (al llegar)
        }
        
        let frame = 0;

        return new Promise((resolve) => {
            function animate() {
                if (window.isAnimationPaused) {
                    requestAnimationFrame(animate);
                    return;
                }
                
                if (window.skipAnimation) {
                    frame = totalFrames - 1;
                    window.skipAnimation = false;
                }
                
                if (frame >= totalFrames) {
                    mainPinwheelMarker.setLngLat(end);
                    mainPinwheelMarker.setOffset([0, 0]); // Reset any raise-offset
                    isMoving = false;
                    // Hide locality name when vehicle arrives
                    const _ld = document.getElementById('locality-name-display');
                    if (_ld) _ld.classList.remove('visible');
                    lastLocalityId = -1;
                    // Hide inter-posta text on arrival
                    const _it = document.getElementById('inter-posta-text');
                    if (_it) _it.classList.remove('visible');
                    resolve();
                    return;
                }
                
                const progress = frame / totalFrames;
                const distAlong = distance * progress;
                const point = turf.along(line, distAlong, { units: 'kilometers' });
                const lng = point.geometry.coordinates[0];
                const lat = point.geometry.coordinates[1];

                // Calculate bearing for camera and object
                let travelBearing = 0;
                if (frame < totalFrames - 1) {
                    const nextDist = distance * ((frame + 1) / totalFrames);
                    const nextPoint = turf.along(line, nextDist, { units: 'kilometers' });
                    travelBearing = turf.bearing(point, nextPoint);
                } else if (frame > 0) {
                    const prevDist = distance * ((frame - 1) / totalFrames);
                    const prevPoint = turf.along(line, prevDist, { units: 'kilometers' });
                    travelBearing = turf.bearing(prevPoint, point);
                }

                // Get forward bearing regardless of travel direction
                let forwardBearing = travelBearing;
                if (endIndex < startIndex) {
                    forwardBearing += 180;
                }
                
                // Subtract 90 so the vehicle always moves horizontally (side view)
                const targetBearing = forwardBearing - 90;
                // Smooth bearing transition for first 30 frames to avoid initial rotation snap
                const blendT = Math.min(1, frame / 30);
                let droneBearing = lerpAngle(map.getBearing(), targetBearing, blendT);
                
                mainPinwheelMarker.setLngLat([lng, lat]);
                
                pathHistory.unshift([lng, lat]);
                if (pathHistory.length > 300) pathHistory.pop();
                
                if (mode === 'train' && window.trainMarkers.length > 0) {
                    window.trainMarkers.forEach((marker, idx) => {
                        const hIdx = Math.min((idx + 1) * 20, pathHistory.length - 1);
                        if (hIdx >= 0 && pathHistory[hIdx]) {
                            marker.setLngLat(pathHistory[hIdx]);
                        }
                    });
                }
                
                // --- Highlight Locality using Turf.js ---
                if (typeof turf !== 'undefined') {
                    const pt = turf.point([lng, lat]);
                    let foundId = -1;
                    for (let f of sanMartinGeoJSON.features) {
                        if (turf.booleanPointInPolygon(pt, f)) {
                            foundId = f.properties.id;
                            break;
                        }
                    }
                    map.setFilter('san-martin-active-glow', ['==', 'id', foundId]);
                    map.setFilter('san-martin-active-fill', ['==', 'id', foundId]);
                    if (map.getLayer('san-martin-active-labels')) {
                        map.setFilter('san-martin-active-labels', ['==', 'id', foundId]);
                    }
                    // Show locality name overlay when entering a new locality
                    if (foundId !== lastLocalityId) {
                        lastLocalityId = foundId;
                        const localityDisplay = document.getElementById('locality-name-display');
                        if (localityDisplay) {
                            if (foundId !== -1) {
                                const feat = sanMartinGeoJSON.features.find(f => f.properties.id === foundId);
                                if (feat) {
                                    localityDisplay.innerText = feat.properties.Localidad;
                                    localityDisplay.classList.add('visible');
                                }
                            } else {
                                localityDisplay.classList.remove('visible');
                            }
                        }
                    }
                }
                
                // When bus approaches Posta 3 depot, raise it and increase pitch
                let pitchToUse = mode === 'flight' ? 45 : 65;
                let zoomToUse = mode === 'flight' ? 14 : 17;
                if (endIndex === 2 && mode === 'street' && progress > 0.5) {
                    const ap = (progress - 0.5) / 0.5; // 0→1
                    pitchToUse = 65 + ap * 20; // 65→85°
                    zoomToUse = 17 + ap * 0.5;
                    // Raise the bus marker upward so the depot image covers it
                    mainPinwheelMarker.setOffset([0, -(ap * 130)]);
                }

                // Hide Posta 1 cartel 1 second before arriving at Posta 2
                if (startIndex === 0 && endIndex === 1 && frame >= totalFrames - 60) {
                    postaScreenEl.classList.remove('visible');
                }
                map.jumpTo({
                    center: [lng, lat],
                    bearing: droneBearing,
                    pitch: pitchToUse,
                    zoom: zoomToUse
                });

                if (frame % 3 === 0) {
                    if (mode === 'street') spawnConfetti([lng, lat], 5); // Colectivo: rastro de confeti
                    else if (mode === 'flight') spawnConfetti([lng, lat], 10);
                    else spawnSparkle([lng, lat]);
                }

                frame++;
                requestAnimationFrame(animate);
            }
            animate();
        });
    }

    window.navigateToPhase = async function navigateToPhase(forward) {
        if (isMoving) return;

        // Keep cartel visible during Posta 1→2 transit so it follows the bus
        if (!(forward && currentPathIndex === 0)) {
            postaScreenEl.classList.remove('visible');
        }

        if (forward) {
            if (mapPhase === 0) {
                // First click: transition to Phase 1 (zoom to Posta 1)
                mapPhase = 1;
                document.getElementById('btn-prev-3').style.display = 'block';

                // Pre-calculate bearing before flying so camera arrives already oriented
                let initialBearing = -45;
                if (typeof turf !== 'undefined') {
                    const b = turf.bearing(turf.point(fullPathArray[0]), turf.point(fullPathArray[1]));
                    initialBearing = b - 90;
                }

                map.flyTo({ center: p1Coord, zoom: 14, pitch: 45, bearing: initialBearing, duration: 2000 });

                // Wait for camera to fully settle before showing the bus.
                // This prevents the bus from appearing to drift during the flyTo animation.
                await new Promise(r => {
                    map.once('moveend', r);
                    setTimeout(r, 2500); // Safety fallback if moveend fires early
                });

                pinwheelDiv.innerHTML = '';
                const w = document.createElement('img');
                w.src = 'COLECTIVO FERIA-anverso.png';
                w.className = 'bus-image';
                const busConf = JSON.parse(localStorage.getItem('busConfig') || '{"size":120, "rot":0}');
                w.style.width = busConf.size + 'px';
                w.style.transform = `translateY(-85%) rotate(${busConf.rot}deg)`;

                const smoke = document.createElement('div');
                smoke.className = 'smoke-effect';

                pinwheelDiv.appendChild(smoke);
                pinwheelDiv.appendChild(w);
                pinwheelDiv.style.display = 'block';
                mainPinwheelMarker.setLngLat(p1Coord);
                // Bus z-index below depot (100) so it passes BEHIND it at Posta 3
                mainPinwheelMarker.getElement().style.zIndex = "30";

                // Mostrar todos los GIFs de postas y localidades
                if (window.posta1MarkerEl) window.posta1MarkerEl.classList.add('visible');
                if (window.posta2MarkerEl) window.posta2MarkerEl.classList.add('visible');
                if (window.depot3MarkerEl) window.depot3MarkerEl.classList.add('visible');
                if (window.depot10MarkerEl) window.depot10MarkerEl.classList.add('visible');
                if (window.migueletMarkerEl) window.migueletMarkerEl.classList.add('visible');
                if (window.localityGifEls) window.localityGifEls.forEach(el => el.classList.add('visible'));
                // jlsMarkerEl se muestra al iniciar el último tramo (no aquí)

                // Mostrar botón de reinicio desde el inicio del recorrido
                const _rbtn = document.getElementById('btn-show-restart');
                if (_rbtn) _rbtn.classList.remove('hidden');

                // Confetti burst
                let cInt = setInterval(() => spawnConfetti(p1Coord, 10), 100);
                setTimeout(() => clearInterval(cInt), 2000);

                // Short pause so user can see the scene before the info screen appears
                await new Promise(r => setTimeout(r, 800));

                postaScreenEl.innerText = postasText[0];
                postaScreenEl.style.bottom = 'auto';
                postaScreenEl.style.top = '-300px';
                postaScreenEl.style.left = '';
                pinwheelDiv.appendChild(postaScreenEl);
                setTimeout(() => postaScreenEl.classList.add('visible'), 100);
                currentPathIndex = 0;

                if (window.postaLabels) {
                    window.postaLabels.forEach(l => l.classList.add('visible'));
                }
            } else if (mapPhase >= 1) {
                // First descent
                if (window.postaLabels) {
                    window.postaLabels.forEach(l => l.classList.remove('visible'));
                }
                
                let nextIndex = -1;

                if (currentPathIndex < fullPathArray.length - 1) {
                    nextIndex = currentPathIndex + 1;
                } else if (currentPathIndex === fullPathArray.length - 1) {
                    // Ya en Posta 9: mostrar el botón de reinicio si no está visible
                    const _btn = document.getElementById('btn-show-restart');
                    if (_btn) _btn.classList.remove('hidden');
                    return;
                }

                if (nextIndex !== -1) {
                    const dirArrow = nextIndex > currentPathIndex ? '➔' : '⬅';
                    destUI.innerText = dirArrow + ' Destino: ' + postasText[nextIndex].split(':')[0];
                    destUI.classList.add('active');

                    let moveMode = 'train';
                    if (nextIndex <= 2) moveMode = 'street'; // Bus on streets

                    // Switch phase if reaching Posta 2 or 3
                    if (nextIndex === 1 && forward && mapPhase < 2) mapPhase = 2;
                    if (nextIndex === 2 && forward && mapPhase < 3) mapPhase = 3;

                    if (moveMode === 'street') {
                        const busImg = pinwheelDiv.querySelector('.bus-image');
                        if (busImg) busImg.src = 'colectivo_animado.gif';
                    } else if (moveMode === 'train') {
                        const trainImg = pinwheelDiv.querySelector('.train-gif-target');
                        if (trainImg) trainImg.src = 'tren_animado.gif';
                    }
                    
                    if (window.posta1MarkerEl) window.posta1MarkerEl.classList.remove('visible');

                    // Mostrar José L. Suárez al iniciar el último tramo del recorrido
                    if (nextIndex === fullPathArray.length - 1 && window.jlsMarkerEl) {
                        window.jlsMarkerEl.classList.add('visible');
                    }

                    await moveToPoint(currentPathIndex, nextIndex, moveMode);
                    currentPathIndex = nextIndex;
                    
                    if (currentPathIndex === 0 && mapPhase >= 1 && window.posta1MarkerEl) {
                        window.posta1MarkerEl.classList.add('visible');
                    }
                    
                    if (moveMode === 'street') {
                        const busImg = pinwheelDiv.querySelector('.bus-image');
                        if (busImg) busImg.src = 'COLECTIVO FERIA-anverso.png';
                    } else if (moveMode === 'train') {
                        const trainImg = pinwheelDiv.querySelector('.train-gif-target');
                        if (trainImg) trainImg.src = 'tren_estatico.png';
                    }
                    
                    if (currentPathIndex === 2) { // Shockwave at Posta 3
                        for(let x=0; x<10; x++) {
                            setTimeout(() => spawnConfetti(fullPathArray[2], 20, 200), x*100);
                        }
                    }

                    if (currentPathIndex === fullPathArray.length - 1 && forward) { // Posta 9 - ¡Conclusiones!
                        lastLocalityId = -1;
                        // Full-screen light show + confetti
                        setTimeout(() => spawnFullScreenCelebration(), 400);
                        // Mostrar botón de reinicio (el panel se abre al tocarlo)
                        setTimeout(() => {
                            const _btn = document.getElementById('btn-show-restart');
                            if (_btn) _btn.classList.remove('hidden');
                        }, 3500);
                    }
                    
                    if (currentPathIndex === 2 && forward) { // Arrived at Posta 3 (Train morph)
                        pinwheelDiv.innerHTML = '';
                        pinwheelDiv.appendChild(postaScreenEl);
                        
                        const conf = JSON.parse(localStorage.getItem('trainConfig') || '{"size":750, "rot":-90, "w1":{"x":20,"y":80}, "w2":{"x":50,"y":80}, "w3":{"x":80,"y":80}}');
                        
                        const trainContainer = document.createElement('div');
                        trainContainer.className = 'train-container';
                        trainContainer.style.position = 'relative';
                        trainContainer.style.width = conf.size + 'px';
                        trainContainer.style.transform = `translateY(-40%) rotate(${conf.rot}deg)`;
                        
                        const img = document.createElement('img');
                        img.src = 'tren_estatico.png';
                        img.className = 'train-gif-target';
                        img.style.width = '100%';
                        img.style.height = 'auto';
                        img.style.display = 'block';
                        trainContainer.appendChild(img);
                        
                        [conf.w1, conf.w2, conf.w3].forEach(wConf => {
                            const w = document.createElement('div');
                            w.className = 'draggable-wheel';
                            w.style.left = wConf.x + '%';
                            w.style.top = wConf.y + '%';
                            w.innerHTML = '<img src="ASPAS FERIA.svg" class="spin-wheel">';
                            trainContainer.appendChild(w);
                        });
                        
                        const smoke = document.createElement('div');
                        smoke.className = 'smoke-effect';
                        trainContainer.appendChild(smoke);
                        
                        pinwheelDiv.appendChild(trainContainer);
                        
                        if (window.trainMarkers) {
                            window.trainMarkers.forEach(m => m.remove());
                            window.trainMarkers = [];
                        }
                    }

                    const color = postaColors[currentPathIndex % postaColors.length];
                    postaScreenEl.innerText = postasText[currentPathIndex];
                    postaScreenEl.style.borderColor = color;
                    postaScreenEl.style.boxShadow = `0 0 15px ${color}`;
                    postaScreenEl.style.color = '#fff';
                    postaScreenEl.style.cursor = 'pointer';
                    postaScreenEl.onclick = () => {
                        window.isAnimationPaused = true;
                        document.getElementById('modal-title').innerText = postasText[currentPathIndex];
                        document.getElementById('embedded-modal').classList.remove('hidden');
                    };
                    if (moveMode === 'street') {
                        postaScreenEl.style.bottom = 'auto';
                        if (currentPathIndex === 1) {
                            // Posta 2: cartel a la izquierda para no tapar el colectivo
                            postaScreenEl.style.top = '-120px';
                            postaScreenEl.style.left = 'calc(50% - 380px)';
                        } else {
                            postaScreenEl.style.top = '-120px';
                            postaScreenEl.style.left = '';
                        }
                    } else {
                        postaScreenEl.style.top = 'auto';
                        postaScreenEl.style.bottom = '-150px';
                        postaScreenEl.style.left = '';
                    }
                    postaScreenEl.classList.add('visible');
                    destUI.classList.remove('active');
                    
                    // Depot is permanently on the map now.
                    
                    if (moveMode === 'street') {    
                        // Make sure the train marker is behind it
                        if (mainPinwheelMarker) {
                            mainPinwheelMarker.getElement().style.zIndex = "40";
                        }
                    } else if (currentPathIndex !== 2 && depotMarker) {
                    }
                }
            }
        } else {
            // BACKWARDS
            if (currentPathIndex > 0) {
                const prevIndex = currentPathIndex - 1;
                destUI.innerText = '⬅ Retrocediendo a: ' + postasText[prevIndex].split(':')[0];
                destUI.classList.add('active');
                
                let moveMode = 'train';
                if (currentPathIndex <= 2) moveMode = 'street';
                
                // If leaving Posta 3 backwards, revert to bus
                if (currentPathIndex === 2) {
                    if (window.trainMarkers) {
                        window.trainMarkers.forEach(m => m.remove());
                        window.trainMarkers = [];
                    }
                    pinwheelDiv.innerHTML = '';
                    const w = document.createElement('img');
                    w.src = 'COLECTIVO FERIA-anverso.png';
                    w.className = 'bus-image';
                    const busConf = JSON.parse(localStorage.getItem('busConfig') || '{"size":120, "rot":0}');
                    w.style.width = busConf.size + 'px';
                    w.style.transform = `translateY(-85%) rotate(${busConf.rot}deg)`;
                    
                    const smoke = document.createElement('div');
                    smoke.className = 'smoke-effect';
                    
                    pinwheelDiv.appendChild(smoke);
                    pinwheelDiv.appendChild(w);
                    pinwheelDiv.appendChild(postaScreenEl);
                    pinwheelDiv.style.display = 'block';
                    mainPinwheelMarker.getElement().style.zIndex = "30";

                    const color = postaColors[currentPathIndex % postaColors.length];
                    postaScreenEl.innerText = postasText[currentPathIndex];
                    postaScreenEl.style.borderColor = color;
                    postaScreenEl.style.boxShadow = `0 0 15px ${color}`;
                    postaScreenEl.style.color = '#fff';
                    postaScreenEl.style.cursor = 'pointer';
                    if (moveMode === 'street') {
                        postaScreenEl.style.bottom = 'auto';
                        if (currentPathIndex === 1) {
                            // Posta 2: cartel a la izquierda para no tapar el colectivo
                            postaScreenEl.style.top = '-120px';
                            postaScreenEl.style.left = 'calc(50% - 380px)';
                        } else {
                            postaScreenEl.style.top = '-120px';
                            postaScreenEl.style.left = '';
                        }
                    } else {
                        postaScreenEl.style.top = 'auto';
                        postaScreenEl.style.bottom = '-150px';
                        postaScreenEl.style.left = '';
                    }
                    postaScreenEl.classList.add('visible');
                    pinwheelDiv.appendChild(postaScreenEl);
                }

                if (moveMode === 'street') {
                    const busImg = pinwheelDiv.querySelector('.bus-image');
                    if (busImg) busImg.src = 'colectivo_animado.gif';
                } else if (moveMode === 'train') {
                    const trainImg = pinwheelDiv.querySelector('.train-gif-target');
                    if (trainImg) trainImg.src = 'tren_animado.gif';
                }
                
                if (window.posta1MarkerEl) window.posta1MarkerEl.classList.remove('visible');

                await moveToPoint(currentPathIndex, prevIndex, moveMode);
                currentPathIndex = prevIndex;
                
                if (currentPathIndex === 0 && mapPhase >= 1 && window.posta1MarkerEl) {
                    window.posta1MarkerEl.classList.add('visible');
                }
                
                if (moveMode === 'street') {
                    const busImg = pinwheelDiv.querySelector('.bus-image');
                    if (busImg) busImg.src = 'COLECTIVO FERIA-anverso.png';
                } else if (moveMode === 'train') {
                    const trainImg = pinwheelDiv.querySelector('.train-gif-target');
                    if (trainImg) trainImg.src = 'tren_estatico.png';
                }
                
                // Hide 3D model if leaving Posta 2 backwards
                if (currentPathIndex < 1) {
                    mapPhase = 1;
                    map.triggerRepaint();
                }

                const color = postaColors[currentPathIndex % postaColors.length];
                postaScreenEl.innerText = postasText[currentPathIndex];
                postaScreenEl.style.borderColor = color;
                postaScreenEl.style.boxShadow = `0 0 15px ${color}`;
                postaScreenEl.style.color = '#fff';
                postaScreenEl.style.cursor = 'pointer';
                postaScreenEl.onclick = () => {
                    window.isAnimationPaused = true;
                    document.getElementById('modal-title').innerText = postasText[currentPathIndex];
                    document.getElementById('modal-title').innerText = postasText[currentPathIndex];
                    document.getElementById('embedded-modal').classList.remove('hidden');
                };
                if (moveMode === 'street') {
                    postaScreenEl.style.bottom = 'auto';
                    if (currentPathIndex === 1) {
                        postaScreenEl.style.top = '-120px';
                        postaScreenEl.style.left = 'calc(50% - 380px)';
                    } else {
                        postaScreenEl.style.top = '-300px';
                        postaScreenEl.style.left = '';
                    }
                } else {
                    postaScreenEl.style.top = 'auto';
                    postaScreenEl.style.bottom = '-150px';
                    postaScreenEl.style.left = '';
                }
                postaScreenEl.classList.add('visible');
                destUI.classList.remove('active');
            }
        }
    }


    // --- Keyboard Controls ---
    document.addEventListener('keydown', (e) => {
        const editorOverlay = document.getElementById('train-editor-overlay');
        
        if (e.key.toLowerCase() === 'e') {
            if (editorOverlay.classList.contains('hidden')) {
                editorOverlay.classList.remove('hidden');
                editorOverlay.style.display = 'flex';
                const wImg = document.querySelector('.train-gif-target');
                if (wImg) {
                    const matchRot = wImg.style.transform.match(/rotate\(([-\d]+)deg\)/);
                    if (matchRot) {
                        document.getElementById('train-rot').value = matchRot[1];
                        document.getElementById('train-rot-val').innerText = matchRot[1] + '°';
                    }
                }
            } else {
                editorOverlay.classList.add('hidden');
                editorOverlay.style.display = 'none';
            }
        }

        // Ctrl + S logic for saving positions
        if (e.ctrlKey && e.key.toLowerCase() === 's') {
            e.preventDefault();
            const msg = `COORDENADAS HUD:\nTítulo: Top: ${hudTitle.style.top}, Left: ${hudTitle.style.left}, Transform: ${hudTitle.style.transform}\nContador: Top: ${hudTimer.style.top}, Left: ${hudTimer.style.left}, Transform: ${hudTimer.style.transform}\n\n¡Copia estos datos y envíaselos a tu programador!`;
            alert(msg);
            return;
        }

        if (e.key.toLowerCase() === 'f') {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(err => console.log(err));
            else if (document.exitFullscreen) document.exitFullscreen();
        }
        
        if (e.key === 'ArrowRight') {
            if (screen1.classList.contains('active')) {
                screen1.classList.remove('active'); screen2.classList.add('active');
            } else if (screen2.classList.contains('active')) {
                screen3.classList.add('under');
                setTimeout(() => map.resize(), 50);
                rollWrapper.classList.add('rolling');
                setTimeout(() => {
                    screen2.classList.remove('active');
                    screen3.classList.remove('under');
                    screen3.classList.add('active');
                    mapPhase = 0;
                }, 2500); 
            } else if (screen3.classList.contains('active')) {
                if (!postaBlackScreen.classList.contains('active')) navigateToPhase(true);
            }
        }
        
        if (e.key === 'ArrowLeft') {
            if (screen2.classList.contains('active')) {
                screen2.classList.remove('active'); screen1.classList.add('active');
            } else if (screen3.classList.contains('active')) {
                if (!postaBlackScreen.classList.contains('active')) navigateToPhase(false);
            }
        }
    });

    // Wire up buttons to simulate arrow keys
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.classList.contains('disabled')) {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
            }
        });
    });
    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.classList.contains('disabled')) {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
            }
        });
    });

    // --- Countdown Timer Logic ---
    const targetDate = new Date('2026-10-18T00:00:00');
    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) return;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        
        const redSpan = document.querySelector('#countdown-timer .t-red');
        const blueSpan = document.querySelector('#countdown-timer .t-blue');
        const greenSpan = document.querySelector('#countdown-timer .t-green');
        
        if (redSpan && blueSpan && greenSpan) {
            redSpan.innerText = days.toString().padStart(2, '0');
            blueSpan.innerText = hours.toString().padStart(2, '0');
            greenSpan.innerText = minutes.toString().padStart(2, '0');
        }
    }
    setInterval(updateTimer, 1000); updateTimer();

    // --- Draggable HUD Logic with LocalStorage ---
    function makeDraggable(el, storageKey) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        let scale = 1;
        
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            const data = JSON.parse(saved);
            el.style.top = data.top;
            el.style.left = data.left;
            el.style.bottom = 'auto'; // Evita conflicto con CSS que usa bottom/right
            el.style.right = 'auto';
            el.style.transform = data.transform;
            scale = data.scale;
        }

        function saveState() {
            localStorage.setItem(storageKey, JSON.stringify({
                top: el.style.top,
                left: el.style.left,
                transform: el.style.transform,
                scale: scale
            }));
        }
        
        el.addEventListener('mousedown', (e) => e.stopPropagation());
        el.onmousedown = (e) => {
            e.preventDefault();
            pos3 = e.clientX; pos4 = e.clientY;
            
            // Fix stretching by changing right/bottom to left/top explicitly
            const computed = window.getComputedStyle(el);
            if (computed.right !== 'auto') {
                el.style.left = el.offsetLeft + "px";
                el.style.right = "auto";
            }
            if (computed.bottom !== 'auto') {
                el.style.top = el.offsetTop + "px";
                el.style.bottom = "auto";
            }
            
            document.onmouseup = () => { document.onmouseup = null; document.onmousemove = null; saveState(); };
            document.onmousemove = (e) => {
                e.preventDefault();
                pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
                pos3 = e.clientX; pos4 = e.clientY;
                el.style.top = (el.offsetTop - pos2) + "px";
                el.style.left = (el.offsetLeft - pos1) + "px";
                el.style.transform = `scale(${scale})`; 
            };
        };

        el.addEventListener('wheel', (e) => {
            e.preventDefault(); e.stopPropagation();
            scale += e.deltaY < 0 ? 0.05 : -0.05;
            if (scale < 0.1) scale = 0.1;
            el.style.transform = `scale(${scale})`;
            saveState();
        });
    }

    const hudTitle = document.querySelector('.hud-title');
    const hudTimer = document.querySelector('.hud-timer-container');
    if (hudTitle) makeDraggable(hudTitle, 'hudTitlePos');
    if (hudTimer) makeDraggable(hudTimer, 'hudTimerPos');

    // --- PANEL REINICIO (Posta 9) ---
    const restartPanel = document.getElementById('restart-panel');
    const restartGrid = document.getElementById('restart-postas-grid');

    // Botón trigger: abre el panel
    const btnShowRestart = document.getElementById('btn-show-restart');
    if (btnShowRestart) {
        btnShowRestart.addEventListener('click', () => {
            if (restartPanel) restartPanel.classList.remove('hidden');
        });
    }

    // Populate posta buttons (skip the last one since we're already there)
    if (restartGrid && typeof postasText !== 'undefined') {
        postasText.slice(0, postasText.length - 1).forEach((text, idx) => {
            const btn = document.createElement('button');
            btn.className = 'restart-posta-btn';
            btn.innerText = text.split(':')[0];
            btn.onclick = () => jumpToPosta(idx);
            restartGrid.appendChild(btn);
        });
    }

    document.getElementById('btn-restart-journey').addEventListener('click', () => {
        window.location.reload();
    });

    window.jumpToPosta = function(index) {
        if (restartPanel) restartPanel.classList.add('hidden');
        const coord = fullPathArray[index];
        currentPathIndex = index;
        const color = postaColors[index % postaColors.length];
        postaScreenEl.innerText = postasText[index];
        postaScreenEl.style.borderColor = color;
        postaScreenEl.style.boxShadow = `0 0 15px ${color}`;
        postaScreenEl.style.color = '#fff';
        postaScreenEl.style.cursor = 'pointer';
        postaScreenEl.style.top = 'auto';
        postaScreenEl.style.bottom = '-150px';
        if (!pinwheelDiv.contains(postaScreenEl)) pinwheelDiv.appendChild(postaScreenEl);
        mainPinwheelMarker.setLngLat(coord);
        mainPinwheelMarker.getElement().style.zIndex = '30';
        pinwheelDiv.style.display = 'block';
        setTimeout(() => postaScreenEl.classList.add('visible'), 200);
        map.flyTo({ center: coord, zoom: 16, pitch: 55, bearing: 0, duration: 2000 });
    };
});


// --- TRAIN EDITOR LOGIC ---
const editTrainBtn = document.getElementById('btn-edit-train');
const trainOverlay = document.getElementById('train-editor-overlay');
const cancelTrainBtn = document.getElementById('btn-cancel-train');

document.querySelectorAll('.btn-skip').forEach(btn => {
    btn.addEventListener('click', () => {
        window.skipAnimation = true;
    });
});
const saveTrainBtn = document.getElementById('btn-save-train');
const sizeSlider = document.getElementById('train-size');
const rotSlider = document.getElementById('train-rot');
const sizeVal = document.getElementById('train-size-val');
const rotVal = document.getElementById('train-rot-val');
const editorCanvas = document.getElementById('editor-canvas');
const editorImg = document.getElementById('editor-train-img');
const wheels = [document.getElementById('wheel-1'), document.getElementById('wheel-2'), document.getElementById('wheel-3')];

function loadTrainConfig() {
    const conf = JSON.parse(localStorage.getItem('trainConfig') || '{"size":750, "rot":-90, "w1":{"x":20,"y":80}, "w2":{"x":50,"y":80}, "w3":{"x":80,"y":80}}');
    sizeSlider.value = conf.size; sizeVal.innerText = conf.size + 'px';
    rotSlider.value = conf.rot; rotVal.innerText = conf.rot + '°';
    editorImg.style.width = conf.size + 'px';
    editorCanvas.style.width = conf.size + 'px';
    editorCanvas.style.height = editorImg.clientHeight + 'px';
    editorCanvas.style.transform = `rotate(${conf.rot}deg)`;
    
    wheels[0].style.left = conf.w1.x + '%'; wheels[0].style.top = conf.w1.y + '%';
    wheels[1].style.left = conf.w2.x + '%'; wheels[1].style.top = conf.w2.y + '%';
    wheels[2].style.left = conf.w3.x + '%'; wheels[2].style.top = conf.w3.y + '%';
}

function saveTrainConfig() {
    const conf = {
        size: parseInt(sizeSlider.value),
        rot: parseInt(rotSlider.value),
        w1: { x: parseFloat(wheels[0].style.left), y: parseFloat(wheels[0].style.top) },
        w2: { x: parseFloat(wheels[1].style.left), y: parseFloat(wheels[1].style.top) },
        w3: { x: parseFloat(wheels[2].style.left), y: parseFloat(wheels[2].style.top) }
    };
    localStorage.setItem('trainConfig', JSON.stringify(conf));
    trainOverlay.classList.add('hidden');
    // Update live train if it exists on the map
    const liveTrain = document.querySelector('.train-container');
    if (liveTrain) {
        liveTrain.style.width = conf.size + 'px';
        liveTrain.style.transform = `translateY(-40%) rotate(${conf.rot}deg)`;
        const liveWheels = liveTrain.querySelectorAll('.draggable-wheel');
        if (liveWheels.length >= 3) {
            liveWheels[0].style.left = conf.w1.x + '%'; liveWheels[0].style.top = conf.w1.y + '%';
            liveWheels[1].style.left = conf.w2.x + '%'; liveWheels[1].style.top = conf.w2.y + '%';
            liveWheels[2].style.left = conf.w3.x + '%'; liveWheels[2].style.top = conf.w3.y + '%';
        }
    }
}

if (editTrainBtn) {
    editTrainBtn.addEventListener('click', () => { trainOverlay.classList.remove('hidden'); loadTrainConfig(); });
}
if (cancelTrainBtn) cancelTrainBtn.addEventListener('click', () => trainOverlay.classList.add('hidden'));

const closeTrainEditorBtn = document.getElementById('btn-close-train-editor');
if (closeTrainEditorBtn) closeTrainEditorBtn.addEventListener('click', saveTrainConfig);

// Also allow closing by clicking outside the panel
trainOverlay.addEventListener('click', (e) => {
    if (e.target === trainOverlay) saveTrainConfig();
});

sizeSlider.addEventListener('input', (e) => {
    sizeVal.innerText = e.target.value + 'px';
    editorImg.style.width = e.target.value + 'px';
    editorCanvas.style.width = e.target.value + 'px';
    editorCanvas.style.height = editorImg.clientHeight + 'px';
});
rotSlider.addEventListener('input', (e) => {
    rotVal.innerText = e.target.value + '°';
    editorCanvas.style.transform = `rotate(${e.target.value}deg)`;
});

if (saveTrainBtn) saveTrainBtn.addEventListener('click', saveTrainConfig);

// Make wheels draggable in editor
wheels.forEach(w => {
    let isDragging = false;
    w.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const rect = editorCanvas.getBoundingClientRect();
        
        // center of the element on screen:
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        
        // vector from center to mouse:
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        
        // rotate vector back by -rot (in radians)
        const rot = parseInt(rotSlider.value);
        const rad = -rot * Math.PI / 180;
        const localX = dx * Math.cos(rad) - dy * Math.sin(rad);
        const localY = dx * Math.sin(rad) + dy * Math.cos(rad);
        
        const unrotatedWidth = parseInt(sizeSlider.value);
        const unrotatedHeight = editorCanvas.offsetHeight;
        
        let x = localX + unrotatedWidth / 2;
        let y = localY + unrotatedHeight / 2;
        
        // Clamp
        x = Math.max(0, Math.min(x, unrotatedWidth));
        y = Math.max(0, Math.min(y, unrotatedHeight));
        
        // Convert to %
        w.style.left = (x / unrotatedWidth * 100) + '%';
        w.style.top = (y / unrotatedHeight * 100) + '%';
    });
});

// --- BUS EDITOR LOGIC ---
const editBusBtn = document.getElementById('btn-edit-bus');
const busOverlay = document.getElementById('bus-editor-overlay');
const cancelBusBtn = document.getElementById('btn-cancel-bus');
const saveBusBtn = document.getElementById('btn-save-bus');
const busSizeSlider = document.getElementById('bus-size');
const busRotSlider = document.getElementById('bus-rot');
const busSizeVal = document.getElementById('bus-size-val');
const busRotVal = document.getElementById('bus-rot-val');
const editorCanvasBus = document.getElementById('editor-canvas-bus');
const editorBusImg = document.getElementById('editor-bus-img');

function loadBusConfig() {
    const conf = JSON.parse(localStorage.getItem('busConfig') || '{"size":120, "rot":0}');
    busSizeSlider.value = conf.size; busSizeVal.innerText = conf.size + 'px';
    busRotSlider.value = conf.rot; busRotVal.innerText = conf.rot + '°';
    editorCanvasBus.style.width = conf.size + 'px';
    editorCanvasBus.style.transform = `rotate(${conf.rot}deg)`;
}

if (editBusBtn) editBusBtn.addEventListener('click', () => { busOverlay.classList.remove('hidden'); loadBusConfig(); });
if (cancelBusBtn) cancelBusBtn.addEventListener('click', () => busOverlay.classList.add('hidden'));

if (busSizeSlider) {
    busSizeSlider.addEventListener('input', (e) => {
        busSizeVal.innerText = e.target.value + 'px';
        editorCanvasBus.style.width = e.target.value + 'px';
    });
}
if (busRotSlider) {
    busRotSlider.addEventListener('input', (e) => {
        busRotVal.innerText = e.target.value + '°';
        editorCanvasBus.style.transform = `rotate(${e.target.value}deg)`;
    });
}

if (saveBusBtn) {
    saveBusBtn.addEventListener('click', () => {
        const conf = { size: parseInt(busSizeSlider.value), rot: parseInt(busRotSlider.value) };
        localStorage.setItem('busConfig', JSON.stringify(conf));
        busOverlay.classList.add('hidden');
        const liveBus = document.querySelector('.bus-image');
        if (liveBus) {
            liveBus.style.width = conf.size + 'px';
            liveBus.style.transform = `translateY(-85%) rotate(${conf.rot}deg)`;
        }
        alert('Colectivo guardado exitosamente.');
    });
}

// --- DEPOT EDITOR LOGIC ---
const editDepotBtn = document.getElementById('btn-edit-depot');
if (editDepotBtn) {
    editDepotBtn.addEventListener('click', () => {
        const overlay = document.getElementById('depot-editor-overlay');
        overlay.classList.remove('hidden');
        overlay.style.display = 'flex';
        
        if (window.depot3MarkerEl) window.depot3MarkerEl.classList.add('visible');
        if (window.depot10MarkerEl) window.depot10MarkerEl.classList.add('visible');
    });
}

const depotSizeSlider = document.getElementById('depot-size');
const depotOffXSlider = document.getElementById('depot-offx');
const depotOffYSlider = document.getElementById('depot-offy');

function updateDepotsLive() {
    if (!depotSizeSlider || !depotOffXSlider || !depotOffYSlider) return;
    const s = depotSizeSlider.value;
    const ox = parseInt(depotOffXSlider.value);
    const oy = parseInt(depotOffYSlider.value);
    
    document.getElementById('depot-size-val').innerText = s + 'px';
    document.getElementById('depot-offx-val').innerText = ox + 'px';
    document.getElementById('depot-offy-val').innerText = oy + 'px';
    
    if (window.depot3MarkerEl) window.depot3MarkerEl.style.width = s + 'px';
    if (window.depot3MarkerObj) window.depot3MarkerObj.setOffset([ox, oy]);
    
    if (window.depot10MarkerEl) window.depot10MarkerEl.style.width = s + 'px';
    if (window.depot10MarkerObj) window.depot10MarkerObj.setOffset([ox, oy]);
}

if (depotSizeSlider) {
    depotSizeSlider.addEventListener('input', updateDepotsLive);
    depotOffXSlider.addEventListener('input', updateDepotsLive);
    depotOffYSlider.addEventListener('input', updateDepotsLive);
    
    document.getElementById('btn-save-depot').addEventListener('click', () => {
        const conf = {
            size: parseInt(depotSizeSlider.value),
            offX: parseInt(depotOffXSlider.value),
            offY: parseInt(depotOffYSlider.value)
        };
        localStorage.setItem('depotConfig', JSON.stringify(conf));
        document.getElementById('depot-editor-overlay').classList.add('hidden');
        document.getElementById('depot-editor-overlay').style.display = 'none';
        
        alert('Depósito guardado exitosamente.');
    });
    
    const dConf = JSON.parse(localStorage.getItem('depotConfig') || '{"size": 720, "offX": 0, "offY": 0}');
    depotSizeSlider.value = dConf.size;
    depotOffXSlider.value = dConf.offX;
    depotOffYSlider.value = dConf.offY;
    document.getElementById('depot-size-val').innerText = dConf.size + 'px';
    document.getElementById('depot-offx-val').innerText = dConf.offX + 'px';
    document.getElementById('depot-offy-val').innerText = dConf.offY + 'px';
}

