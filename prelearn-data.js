/* ═══════════════════════════════════════════
   사전 선행학습 콘텐츠 데이터
   출처: iSIS-SMTV_Level 00~01 Training Manual_EN.pptx (116 slides)
═══════════════════════════════════════════ */
function pn(n){return 'prelearn-slides/slide-'+String(n).padStart(3,'0')+'.jpg';}
var IMG_ONLY_EN='Refer to the labeled parts in the image above.';
var IMG_ONLY_KO='위 이미지에 표시된 부품 명칭을 확인하세요.';
function sl(n,en,ko){return {n:n,img:pn(n),en:en||'',ko:ko||''};}
function divider(n){return {n:n,img:pn(n),en:'',ko:'',isDivider:true};}

var PRELEARN_CHAPTERS=[
{code:'1',titleEn:'Chapter 1. Introduce',titleKo:'1장. 설비 소개 (Level 0)',
 sections:[
  {code:'1.1.1',titleEn:'Introduction & Inspection Items',titleKo:'설비 소개 및 검사 항목',slides:[
    divider(4),
    sl(5,'iSIS-SMTV is a Bump-AOI equipment. For thickness valuation inspection, 3D is measured on a suction jig with precise flatness.\n\nInspection target: FC-BGA, FC-CSP\nInspection items: Bump Height, Bump Area, Warpage, Bump Coplanarity, Bump Diameter, Bump Missing, Bump Bridge, Foreign material, Scratch, Thickness Valuation, Etc.',
       'iSIS-SMTV는 Bump-AOI 설비입니다. Thickness Valuation 검사를 위해, 3D는 정밀한 평탄도의 Suction Jig 위에서 측정됩니다.\n\n검사 대상: FC-BGA, FC-CSP\n검사 항목: Bump Height, Bump Area, Warpage, Bump Coplanarity, Bump Diameter, Bump Missing, Bump Bridge, 이물, 스크래치, Thickness Valuation 등')
  ]},
  {code:'1.1.2',titleEn:'Inspection Principle',titleKo:'검사 원리 (WSI 간섭계측)',slides:[
    divider(6),
    sl(7,'A light source for inspection using WSI is suitable for light having single frequency and coherent. If you use inconsistent light, you cannot see interference.',
       'WSI를 이용한 검사를 하기 위한 광원은 단일 파장과 일관성을 갖는 빛이 적합하다. 만약 일관성 없는 빛을 사용한다면, 우리는 간섭을 볼 수 없다.'),
    sl(8,'In the interference experiment using monochromatic light as a light source, the light becomes stronger where the crests overlap, and weaker where the crest and trough overlap. As a result, the lightest and darkest parts alternately appear, resulting in an interference pattern.',
       '단색광을 광원으로 사용해서 간섭 실험을 하면, 마루와 마루가 겹치는 곳에서는 빛이 강해지고, 골과 골이 겹치는 곳에서는 빛이 약해진다. 그 결과, 빛이 가장 밝은 부분과 가장 어두운 부분이 번갈아 나타나게 되어 간섭 무늬가 생긴다.'),
    sl(9,'Use a single light source (LED, Laser) to generate a beam and split it into two beams via a beam splitter. When the beams reflected at the same distance (d1=d2) are synthesized into one beam, an interference pattern due to constructive and destructive interference may be checked. This method can obtain data by performing contactless measurement on the sample surface.',
       '단일 광원(LED, Laser)을 사용하여 빔을 생성하고, B/S를 통해 두 개의 빔을 생성한다. 동일한 거리(d1=d2)에서 반사된 빔을 한 개의 빔으로 합성하였을 때 보강·상쇄 간섭에 의한 간섭무늬를 확인할 수 있다. 이 방법은 시료 표면에 대한 비접촉 측정을 하여 데이터를 얻을 수 있다.'),
    sl(10,'It is an interference pattern with the inspection method. 3D Z-map is made through the signal strength of the pattern.',
       '검사 방법과 실제 간섭무늬 패턴이다. 패턴의 신호 세기를 통해 3D Z-Map을 생성한다.')
  ]},
  {code:'1.2.1',titleEn:'Machine Spec',titleKo:'설비 사양',slides:[
    divider(11),
    sl(12,'Specification #1 — Electric Phase: Three phase / Electric Voltage: AC 220V or 208V / Electric Current: 50/60A / Electric KVA: 22.8KVA / UPS: Host PC only / Certification: CE Mark / Air(CDA): Dry air 5~6kgf/cm2, Air Hose 12Φ x 2ea / Air consumption: 1500 L/min / Weight: 4800kg(4.8 ton) / Size: 3880(W) x 2010(D) x 2480(H) mm.',
       '규격 #1 — 전기 상: 3상 / 전압: AC 220V 또는 208V / 전류: 50/60A / 용량: 22.8KVA / UPS: Host PC 전용 / 인증: CE Mark / 공압(CDA): 5~6kgf/cm2, 에어호스 12Φ x 2ea / 공압 소모량: 1500 L/min / 중량: 4800kg / 크기: 3880(W)x2010(D)x2480(H)mm'),
    sl(13,'Specification #2 — Rail: 7 Rail System (Input: Loader/Empty/Reject Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 45장(JEDEC 규격) / Number of Vision: 3D Vision 2 SET, 2D Vision 1 SET / Tray Indexer: Dual Loader Index / Tray Transfer: Tray stack 상태 확인 / Loading·Unloading Picker: 6 Picker / Sorting Picker: 2-Picker.',
       '규격 #2 — Rail: 7 Rail 시스템(Input: Loader/Empty/Reject Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: 45장(JEDEC 규격) / Vision 수량: 3D Vision 2식, 2D Vision 1식 / Tray Indexer: Dual Loader Index / Loading·Unloading Picker: 6 Picker / Sorting Picker: 2-Picker'),
    sl(14,'Dimensions (Front/Right view) — Customer: ATNS, NANYA. W3880 x D2010 x H2118/2390/2070mm.','치수(정면/우측면) — 고객사: ATNS, NANYA'),
    sl(15,'Dimensions (Front/Right view) — Customer: SEMV, SEMCO. W3880 x D2010 x H2550/2390/2070mm.','치수(정면/우측면) — 고객사: SEMV, SEMCO')
  ]},
  {code:'1.2.2',titleEn:'Camera Spec',titleKo:'카메라 사양',slides:[
    divider(16),
    sl(17,'3D Vision Specification (12M, Cube B/S type) — Camera: 12M Pixel(4K x 3K) 330fps CXP / Lens: x1.0 Telecentric(5.5um) / F.O.V: 22x16.5mm / Scan Range: 250um(PZT, PI) or 300um(NanoFaktur), 5mm(Z-Axis) / AF: Optical Triangulation / Accuracy: <1um / Repeatability: <1um.',
       '3D Vision 사양(12M, Cube B/S 타입) — 카메라 12M Pixel(4Kx3K) 330fps CXP, 렌즈 x1.0 Telecentric(5.5um), F.O.V 22x16.5mm, 정확도 <1um'),
    sl(18,'3D Vision Specification (12M, Flat B/S type) — same core spec as Cube type (12M Pixel, x1.0 Telecentric Lens, F.O.V 22x16.5mm), different beam-splitter mechanical form.',
       '3D Vision 사양(12M, Flat B/S 타입) — Cube 타입과 핵심 사양은 동일하며 Beam Splitter 형태만 다릅니다.'),
    sl(19,'3D Vision Specification (25M, Cube B/S type) — Camera: 25M Pixel(5K x 5K) 150fps CXP / Lens: x0.75 Telecentric(3.3um) / F.O.V: 17.1x17.1mm.',
       '3D Vision 사양(25M, Cube B/S 타입) — 카메라 25M Pixel(5Kx5K) 150fps CXP, 렌즈 x0.75 Telecentric(3.3um), F.O.V 17.1x17.1mm'),
    sl(20,'2D Vision Specification (12M) — Camera: 12M Pixel(4K x 3K) 180fps CXP, BNC Type / Lens: x1.0 Telecentric(5.5um) / F.O.V: 22x16.5mm / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC.',
       '2D Vision 사양(12M) — 카메라 12M Pixel(4Kx3K) 180fps CXP, 검사 항목: Diameter, Top Diameter, Bridge, FM, SC')
  ]},
  {code:'1.2.3',titleEn:'Safety Sticker',titleKo:'안전 스티커',slides:[
    divider(21),
    sl(22,'Safety stickers are attached according to the customer\'s request.','안전 스티커는 고객사의 요청에 따라 부착합니다.')
  ]},
  {code:'1.3.1',titleEn:'Layout & Component',titleKo:'레이아웃 및 구성품',slides:[
    divider(23),
    sl(24,'External layout (Front) — Main machine, ISO machine, Tower lamp, EMS, Monitor, EFU, Operation panel, Keyboard & mouse. Configuration and installation locations vary depending on equipment specifications.','외형 레이아웃(정면) — 구성 및 설치 위치는 장비 사양에 따라 다릅니다.'),
    sl(25,'External layout (Rear) — Main machine, ISO machine, Main power switch, EMS. Configuration and installation locations vary depending on equipment specifications.','외형 레이아웃(후면) — 구성 및 설치 위치는 장비 사양에 따라 다릅니다.'),
    sl(26,'Internal layout (Front) — 3D Vision #1/#2 PC, 2D Vision PC, Host PC, KVM, HUB, LED controllers, UPS, MSM.','내부 레이아웃(정면) — 각 PC, KVM, HUB, LED 컨트롤러, UPS, MSM 위치'),
    sl(27,'Internal layout (Rear) — 3D Vision #1/#2 AF/PZT controller, TTM, Air regulator, 3D Vision modules.','내부 레이아웃(후면) — AF/PZT 컨트롤러, TTM, 에어 레귤레이터, 3D Vision 모듈 위치'),
    sl(28,'Internal layout (Top) — Main machine, ISO machine, 3D Vision module #1/#2, TTM, MSM, 2D Vision module, Loader/Unloader multi picker, Jig#1/#2 multi picker.','내부 레이아웃(상단) — 각 비전 모듈, TTM, MSM, 피커 배치'),
    sl(29,'Internal layout (Top, indexers) — Align #1/#2 indexer, Jig #1/#2 indexer, Loader indexer, Empty/Reject empty indexer, Good/Buffer/Reject indexer.','내부 레이아웃(상단, 인덱서) — 각 인덱서 배치'),
    sl(30,IMG_ONLY_EN+' (Elevator Z-axis, 4EA — motor direction)',IMG_ONLY_KO+' (Elevator Z축, 4EA — 모터 방향)'),
    sl(31,IMG_ONLY_EN+' (Load multi picker X/Z-axis)',IMG_ONLY_KO+' (Load multi picker X/Z축)'),
    sl(32,IMG_ONLY_EN+' (Jig multi picker #1/#2 X/Z-axis)',IMG_ONLY_KO+' (Jig multi picker #1/#2 X/Z축)'),
    sl(33,IMG_ONLY_EN+' (Aligner #1/#2 X/Y-axis)',IMG_ONLY_KO+' (Aligner #1/#2 X/Y축)'),
    sl(34,IMG_ONLY_EN+' (3D Vision #1/#2 X/Z-axis)',IMG_ONLY_KO+' (3D Vision #1/#2 X/Z축)'),
    sl(35,IMG_ONLY_EN+' (Unload multi picker X/Z-axis)',IMG_ONLY_KO+' (Unload multi picker X/Z축)'),
    sl(36,IMG_ONLY_EN+' (Dual tray transfer module X/Z-axis)',IMG_ONLY_KO+' (Dual tray transfer module X/Z축)'),
    sl(37,IMG_ONLY_EN+' (2D Vision X/Z-axis)',IMG_ONLY_KO+' (2D Vision X/Z축)'),
    sl(38,IMG_ONLY_EN+' (Multi sorter module X/Z-axis, gap X-axis)',IMG_ONLY_KO+' (Multi sorter module X/Z축, gap X축)'),
    sl(39,IMG_ONLY_EN+' (Indexer Y-axis — Align/Jig/Loader/Empty/Good/Buffer/Reject indexers)',IMG_ONLY_KO+' (각 Indexer Y축)'),
    sl(40,IMG_ONLY_EN+' (2D Vision module, 25M camera — main camera, lens, coaxial light, Z-axis motor, sensors)',IMG_ONLY_KO+' (2D Vision 모듈 25M 카메라 구성)'),
    sl(41,IMG_ONLY_EN+' (3D Vision module, B/S type — camera, aperture, Z-axis motor, sensors)',IMG_ONLY_KO+' (3D Vision 모듈 B/S 타입 구성)'),
    sl(42,IMG_ONLY_EN+' (3D Vision module, B/S type — beam splitter, laser, reference mirror, PZT stage optics detail)',IMG_ONLY_KO+' (3D Vision 모듈 B/S 타입 광학계 상세)'),
    sl(43,IMG_ONLY_EN+' (3D Vision module, Cube type — camera, aperture, Z-axis motor, sensors)',IMG_ONLY_KO+' (3D Vision 모듈 Cube 타입 구성)'),
    sl(44,IMG_ONLY_EN+' (3D Vision module, Cube type — cube beam splitter, laser, reference mirror, PZT stage optics detail)',IMG_ONLY_KO+' (3D Vision 모듈 Cube 타입 광학계 상세)'),
    sl(45,IMG_ONLY_EN+' (TTM: Tray transfer module — gripper, Z-axis motor, sensors, ejector)',IMG_ONLY_KO+' (TTM: Tray transfer module 구성)'),
    sl(46,'MSM: Multi sorter module — picker, gap motor, vacuum ejector, solenoid valve, sensors. Configuration and installation locations vary depending on equipment specifications.','MSM: Multi sorter module 구성 — 구성 및 설치 위치는 장비 사양에 따라 다릅니다.'),
    sl(47,IMG_ONLY_EN+' (Loader & unloader multi picker — picker, vacuum generator, Z-axis motor, sensors)',IMG_ONLY_KO+' (Loader & unloader multi picker 구성)'),
    sl(48,IMG_ONLY_EN+' (Jig multi picker — picker, vacuum generator, Z-axis motor, sensors)',IMG_ONLY_KO+' (Jig multi picker 구성)'),
    sl(49,IMG_ONLY_EN+' (Jig module — LTS target, Y-axis motor, cableveyor, home/limit sensors)',IMG_ONLY_KO+' (Jig module 구성)'),
    sl(50,IMG_ONLY_EN+' (Indexer — finger clamps, cableveyor, push cylinder, sensors)',IMG_ONLY_KO+' (Indexer 구성)'),
    sl(51,IMG_ONLY_EN+' (Elevator — motor type vs. cylinder type; belt, pulley, ball screw, sensors)',IMG_ONLY_KO+' (Elevator 모터 타입/실린더 타입 구성)'),
    sl(52,IMG_ONLY_EN+' (Stacker — load/empty stacker speed controllers, tray check/clamp sensors)',IMG_ONLY_KO+' (Stacker 구성)'),
    sl(53,IMG_ONLY_EN+' (PC KVM, 8 port — monitor connection)',IMG_ONLY_KO+' (PC KVM 8포트 — 모니터 연결)'),
    sl(54,'KVM keyboard & mouse connection diagram.','KVM 키보드·마우스 연결도'),
    sl(55,IMG_ONLY_EN+' (HUB — Netgear multi-switch connecting Host/3D#1/3D#2/2D PCs, AF controllers)',IMG_ONLY_KO+' (HUB — Host/3D#1/3D#2/2D PC 및 AF 컨트롤러 연결)'),
    sl(56,IMG_ONLY_EN+' (PI PZT Controller E-754 wiring — PZT stage, 3D LED controller, sync board)',IMG_ONLY_KO+' (PI PZT 컨트롤러 배선도)'),
    sl(57,IMG_ONLY_EN+' (nanoFaktur PZT Controller EBD-120210 wiring)',IMG_ONLY_KO+' (nanoFaktur PZT 컨트롤러 배선도)'),
    sl(58,IMG_ONLY_EN+' (Host PC wiring #1 — AF serial/LAN cards, powermeter LAN, HUB, KVM switch)',IMG_ONLY_KO+' (Host PC 배선도 #1)'),
    sl(59,IMG_ONLY_EN+' (Host PC wiring #2 — KVM/graphic card, motor/IO module, ACS license key, motor driver)',IMG_ONLY_KO+' (Host PC 배선도 #2)'),
    sl(60,IMG_ONLY_EN+' (2D Vision PC wiring — vision camera, grab board, LED controller sync)',IMG_ONLY_KO+' (2D Vision PC 배선도)'),
    sl(61,'3D Vision PC wiring — vision camera, grab board, PZT/AF controller connections. Optical system cables may vary depending on specification.','3D Vision PC 배선도 — 광학시스템 케이블은 사양에 따라 다를 수 있습니다.')
  ]},
  {code:'1.3.2',titleEn:'Interlock System',titleKo:'인터록 시스템',slides:[
    divider(62),
    sl(63,'Auto Mode: Motor power can be supplied only when the upper doors are all closed and locked. If an alarm occurs during automatic operation: 1) click Reset, 2) release the Door Interlock, 3) open the door and resolve the alarm point, 4) close the door and lock, 5) push Start to resume.\nTeach Mode: Motor power can be supplied even when the upper door is open or unlocked. Auto/Teach mode can be changed via the Handler program I/O.',
       'Auto Mode: 상부 도어가 모두 닫히고 잠겼을 때만 모터 전원을 공급할 수 있습니다. 자동운전 중 알람 발생 시: 1)Reset 클릭 2)도어 인터록 해제 3)문을 열고 알람 해결 4)문을 닫고 Lock 5)Start로 재개.\nTeach Mode: 상부 도어가 열려있거나 잠금 해제된 상태에서도 모터 전원을 공급할 수 있습니다.'),
    sl(64,'6 EMS (Emergency Stop Switch) buttons are installed. All 6 must be in the released (pull) state to supply motor power — if even one is pushed, motor power is cut off. EMS is used to cut off motor power in an emergency.',
       '설비에 6개의 EMS 버튼이 설치되어 있습니다. 6개 모두 pull 상태여야 모터 전원 공급이 가능하며, 1개라도 push되면 전원이 차단됩니다. 비상 시 모터 전원 차단 용도입니다.'),
    sl(65,'A door interlock system is installed on the upper door to prevent the operator from opening it while the equipment is running. Only engineers authorized by Intekplus may release the interlock for maintenance.',
       '상부 도어에는 도어 인터록 시스템이 설치되어 있어 설비 작동 중 작업자가 문을 열지 못하도록 합니다. 유지보수를 위한 인터락 해제는 Intekplus가 허용한 엔지니어만 가능합니다.'),
    sl(66,'All lower doors must be closed to supply power to the lower door cooling fan. This fan power is supplied automatically and cannot be turned on manually.',
       '하부 도어에 설치된 방열팬에 전원을 공급하려면 모든 하부 도어가 닫혀 있어야 합니다. 방열팬 전원은 자동 공급되며 수동으로 켤 수 없습니다.')
  ]},
  {code:'1.3.3',titleEn:'Equipment Automatic Sequence',titleKo:'설비 자동 동작 순서',slides:[
    divider(67),
    sl(68,'Overview of the 10-step automatic sequence: 1)Load tray 2)Unit pick up & move to aligner 3)Unit align 4)Place unit on the Jig 5)3D inspection 6)Unit transfer to tray 7)Transfer tray (Good/Buffer rail) 8)2D inspection 9)Unit sorting 10)Unload tray — plus pre-steps a)Load empty tray b)Load reject empty tray c)Transfer empty tray.',
       '자동 동작 10단계 개요: 1)트레이 투입 2)유닛 픽업 후 얼라이너 이동 3)유닛 정렬 4)Jig에 안착 5)3D 검사 6)트레이로 유닛 이송 7)트레이 이송(Good/Buffer) 8)2D 검사 9)유닛 소팅 10)트레이 배출'),
    sl(69,'Empty tray: Prepare the empty tray. Use the Elevator and Stacker to separate each tray. The indexer moves the tray to the TTM, which moves the empty tray to the reject rail.',
       'Empty tray: Empty Tray를 준비합니다. Elevator와 Stacker로 한 장씩 분리하고, Indexer가 TTM으로, TTM이 Reject Rail로 이동시킵니다.'),
    sl(70,'Load tray: Place the tray with units in the loader. Use the Elevator and Stacker to separate each tray.',
       'Load tray: Unit이 담긴 Tray를 Loader에 올려놓고, Elevator와 Stacker로 한 장씩 분리합니다.'),
    sl(71,'Tray Unit Pick & Align Place (Loading): The Loader Multi Picker catches the unit injected from the loader and places it on the aligner.',
       'Tray Unit Pick & Align Place(Loading): Loader Multi Picker가 투입된 Unit을 잡아 Align에 내려놓습니다.'),
    sl(72,'Aligner Pick & Jig Place: After aligning, the unit is moved to the jig table using the Jig Multi Picker.',
       'Aligner Pick & Jig Place: 정렬 후 Jig Multi Picker로 Jig 테이블에 이동합니다.'),
    sl(73,'3D inspection: Inspect the bump area of the unit. If the bump area is larger than the F.O.V, divide the inspection area into two or more.',
       '3D inspection: Unit의 Bump Area를 검사합니다. Bump Area가 F.O.V보다 크면 검사 영역을 2개 이상으로 나눕니다.'),
    sl(74,'JIG Pick & Tray Unit Place (Unloading): Transfer the unit that completed 3D inspection to a tray.',
       'JIG Pick & Tray Unit Place(Unloading): 3D 검사가 끝난 Unit을 Tray로 이송합니다.'),
    sl(75,'Tray sorting: Move the tray to Buffer or Good in the order in which inspection is completed.',
       'Tray sorting: 검사 완료 순서대로 트레이를 Buffer 또는 Good으로 이송합니다.'),
    sl(76,'Read the barcode of unit: Move to the unit for inspection and read the barcode of the R.O.I area (OCR or Matrix barcode).',
       'Read the barcode of unit: 검사할 Unit으로 이동하여 R.O.I 영역의 Barcode를 읽습니다.'),
    sl(77,'2D inspection: Inspect the bump area of the unit. If larger than the F.O.V, divide into two or more inspection areas.',
       '2D inspection: Unit의 Bump Area를 검사합니다. Bump Area가 F.O.V보다 크면 검사 영역을 2개 이상으로 나눕니다.'),
    sl(78,'Unit sorting: Units inspected are classified as Good or Reject.','Unit sorting: 검사가 끝난 Unit을 양품/불량으로 분류합니다.'),
    sl(79,'Unload tray: Unload the classified tray.','Unload tray: 분류가 끝난 Tray를 배출합니다.')
  ]}
 ]},
{code:'2',titleEn:'Chapter 2. Operation',titleKo:'2장. 설비 조작 (Level 1)',
 sections:[
  {code:'2.1.1',titleEn:'Electrical Turn-on Sequence',titleKo:'전원 투입 순서',slides:[
    divider(80),
    sl(81,'Rear view ports: External LAN port, Air 1~4 (Main equipment air socket, 12Φ), Main power cable socket.','후면 포트: 외부 LAN 포트, Air 1~4(설비 메인 공압 소켓 12Φ), 메인 전원 케이블 소켓'),
    sl(82,'Adjust the regulator so each air regulator maintains 4~6bar. Air1: Indexer/Stacker/Elevator/Picker/Air Gun. Air2: ISO Jig Pocket Vacuum. Air3: Multi Sorter/ISO Picker Vacuum. Air4: ISO Main Air.',
       '각 Air Regulator가 4~6bar를 유지하도록 조절합니다. Air1: Indexer/Stacker/Elevator/Picker/Air Gun. Air2: ISO Jig Pocket Vacuum. Air3: Multi Sorter/ISO Picker Vacuum. Air4: ISO Main Air.'),
    sl(83,'To supply power to the SMTV, check: main breaker On/Off, circuit breaker inside the electric panel, utility panel lamp, upper door lock/unlock per Auto/Teach mode, EMS push/pull state, lower door closed (for fan), UPS On/Off (Host PC), power strip On/Off (PC/LED controller), main air supplied, air regulator 4~6bar, operation panel button lamp status.',
       'SMTV에 전원을 공급하려면: Main 차단기, 전장 판넬 내부 차단기, Utility panel 수전 lamp, Auto/Teach에 따른 상부 도어 lock/unlock, EMS push/pull 상태, 하부 도어 닫힘(방열팬용), UPS On/Off, 멀티탭 On/Off, Main Air 공급, 각 Regulator 4~6bar, Operation Panel 램프 상태를 확인합니다.'),
    sl(84,'Turn on the main circuit breaker installed in the main panel. The release key is used to open the door.','장비 메인 패널의 메인 회로 차단기를 켭니다. Release Key는 문을 열 때 사용합니다.'),
    sl(85,'Turn on all circuit protectors (CP) inside the electric panel (main + sub panel).','전장 판넬(메인+서브) 내부의 모든 CP를 켭니다.'),
    sl(86,'The utility panel power lamp should turn on only when the CP01 power lamp breaker is turned on. Intel equipment do not have a power lamp.','CP01 Power Lamp 차단기를 On 해야 Utility panel 수전 lamp가 켜집니다. Intel향 설비에는 수전 lamp가 없습니다.'),
    sl(87,'To supply power to the Host PC, the UPS must be turned on. Turn off UPS power during power-related work. Intel equipment do not have a UPS.','Host PC 전원 공급을 위해 UPS를 켭니다. 전원 관련 작업 시 반드시 UPS를 끕니다. Intel향 설비는 UPS가 없습니다.'),
    sl(88,'To supply power to controllers such as PC and LED controller, the power strip must be turned on.','PC 및 LED Controller 등에 전원을 공급하려면 Multi Tap을 켜야 합니다.'),
    sl(89,'When all breakers are on, the power-off button lamp should be on and the Reset button lamp flashes ~500ms cycle. Pushing Power-on turns that lamp on and the power-off lamp off. In Teach mode, pushing Reset with all EMS pulled supplies motor power. In Auto mode, motor power requires all EMS pulled AND all upper doors locked — unlocking the upper door in Auto mode cuts motor power.',
       '모든 차단기 On 시 Power off 버튼 램프 On, Reset 버튼은 약 500ms 주기로 점멸합니다. Teach mode는 EMS가 모두 pull 상태에서 Reset을 누르면 모터 전원이 공급됩니다. Auto mode는 EMS pull + 상부 도어 모두 lock 상태여야 하며, Auto mode에서 상부 도어를 unlock하면 모터 전원이 차단됩니다.')
  ]},
  {code:'2.1.2',titleEn:'PC, Controller, Camera',titleKo:'PC·컨트롤러·카메라 전원',slides:[
    divider(90),
    sl(91,'Turn on the PCs (HOST, 2D, 3D#1, 3D#2) and LED controllers (2D, 3D#1, 3D#2). Host PC turns on after the UPS (except when there is no UPS). Turning on the LED controller also turns on the camera (varies by camera spec).',
       'PC(HOST, 2D, 3D#1, 3D#2)와 LED Controller(2D, 3D#1, 3D#2)를 켭니다. HOST PC는 UPS를 켠 후에 켭니다. LED controller를 켜면 카메라도 켜집니다(사양에 따라 다름).'),
    sl(92,'Turn on the PZT and AF Controllers (3D#1, 3D#2). Raising equipment power while the controller power button is already on may damage the controller due to overvoltage.',
       '3D#1, 3D#2의 PZT, AF Controller 전원을 켭니다. 전원 버튼이 켜진 상태에서 장비 전원을 올리면 과전압으로 컨트롤러가 손상될 수 있습니다.')
  ]},
  {code:'2.1.3',titleEn:'Equipment Turn-off Sequence',titleKo:'전원 차단 순서',slides:[
    divider(93),
    sl(94,'Turn off in the reverse order of the turn-on sequence: Controller(AF,LED,PZT,PC) → Operation panel power-off → Power strip off → UPS off → CP off → Main panel off. Failure to follow this order may damage electrical components.',
       '켤 때의 반대 순서로 끕니다: 컨트롤러(AF,LED,PZT,PC) → 조작반 전원오프 → 멀티탭 오프 → UPS 오프 → CP 오프 → 메인 패널 오프. 순서를 지키지 않으면 전기 부품이 손상될 수 있습니다.')
  ]},
  {code:'2.2.1',titleEn:'Host & Vision Main Software',titleKo:'Host 및 Vision 메인 소프트웨어',slides:[
    divider(95),
    sl(96,'Switch screens with Ctrl+Ctrl+1~4 (1:HOST, 2:3D Vision1, 3:3D Vision2, 4:2D Vision). Switch to HOST and run the iSMTV_Host program.',
       'Ctrl+Ctrl+1~4로 화면을 전환합니다(1:HOST, 2:3D Vision1, 3:3D Vision2, 4:2D Vision). HOST로 전환 후 iSMTV_Host 프로그램을 실행합니다.'),
    sl(97,'Switch to 3D Vision1 (Vision2, 2D Vision) and run the VisionTray program.','3D Vision1(Vision2, 2D Vision)으로 전환 후 VisionTray 프로그램을 실행합니다.')
  ]},
  {code:'2.2.2',titleEn:'Host System Status',titleKo:'Host 시스템 상태',slides:[
    divider(98),
    sl(99,'Check the system status at the top of the HOST program. Inspection can proceed only when all statuses show ready (green).','HOST 프로그램 상단의 시스템 상태를 확인합니다. 모든 상태가 준비(녹색)일 때만 검사를 진행할 수 있습니다.'),
    sl(100,'If not ready, check: Handler (run initialization), Vision (click Connect Vision — if it fails, check Vision PC IP, program version match, Vision program status), AF1/AF2 (LAN connection), Motor (OP panel power / EMS state), Interlock (all doors closed, click Interlock to lock).',
       '준비되지 않았다면: Handler(초기화 진행), Vision(Connect Vision 클릭 — 실패 시 IP, 버전, 프로그램 상태 확인), AF1/AF2(LAN 연결 확인), Motor(OP Panel 전원/EMS 상태 확인), Interlock(모든 도어 닫힘 확인 후 Interlock 클릭).')
  ]},
  {code:'2.2.3',titleEn:'Host Operation UI',titleKo:'Host 운영 화면(UI)',slides:[
    divider(101),
    sl(102,'Host main program window areas: Log In & Save, Run Menu, System Status, Unit Status, Lot Info, Inspection Results, Safety Status, Sorting Information, Log.','Host 메인 화면 구성: 로그인&저장, Run 메뉴, 시스템 상태, 유닛 상태, Lot 정보, 검사 결과, 안전 상태, 소팅 정보, 로그'),
    sl(103,'Buttons: Log In(access rights), Job Open(select recipe), Job Save, Process(status), Save Log, Start(create inspection info window), Resume, Pause, Lot Cancel, LTS V1/V2, Tray LTS, Empty Handler(auto-remove trays), Init Handler(equipment init).',
       '버튼: 로그인(접근권한), Job Open(레시피 선택), Job Save, Process(상태확인), Save Log, Start(검사정보 입력창 생성), Resume, Pause, Lot Cancel, LTS V1/V2, Tray LTS, Empty Handler(트레이 자동제거), Init Handler(설비 초기화)'),
    sl(104,'Status areas: Unit Status(current position), Inspection status(per-vision result), Safety Status(door open/lock), Vision(switch to vision PC screen / monitor inspection images / check connection), Yield(per-vision inspection yield), Log(detailed equipment log).',
       '상태 영역: Unit Status(현재 위치), Inspection status(비전별 결과), Safety Status(도어 열림/잠김), Vision(비전PC 전환/이미지 모니터링/연결 상태 확인), Yield(비전별 수율), Log(상세 로그)'),
    sl(105,'Info fields: Lot ID, Part Number, Recipe Name, Operator, Cycle Time 1/2(per-vision inspect time), Start Time, Run Time, Yield, UPH, Total/Pass/Fail count, Sorting Tray(status by rail).',
       '정보 항목: Lot ID, Part Number, Recipe Name, Operator, Cycle Time 1/2, Start Time, Run Time, Yield, UPH, Total/Pass/Fail 수량, Sorting Tray(레일별 상태)')
  ]},
  {code:'2.2.4',titleEn:'Handler Initialize',titleKo:'핸들러 초기화',slides:[
    divider(106),
    sl(107,'Click \'Init Handler\'.','[Init Handler]를 클릭합니다.'),
    sl(108,'The icon in front of the Handler changes from red to green when equipment initialization is complete.','설비 초기화가 완료되면 Handler 앞의 아이콘이 빨간색에서 녹색으로 바뀝니다.')
  ]},
  {code:'2.3.1',titleEn:'Run Inspection',titleKo:'검사 실행',slides:[
    divider(109),
    sl(110,'Click \'Log In\'. Select access level \'Operator\', fill in User ID and Password, and click OK.','[Log In]을 클릭합니다. [Operator] 접근 단계를 선택하고 User ID/Password 입력 후 [확인]을 누릅니다.'),
    sl(111,'Place the unit tray on the first (leftmost) loader stacker. Place empty trays on the 2nd/3rd empty and reject-empty stackers. The \'Lot Start\' button cannot be clicked with nothing loaded — at least 6 empty trays must be placed in the Empty Stacker to proceed.',
       '검사할 unit tray를 좌측 첫번째 loader stacker에, empty tray를 두번째·세번째 empty/reject empty stacker에 올려놓습니다. 아무것도 없으면 Lot Start를 클릭할 수 없으며, Empty Stacker에 최소 6개 이상의 Empty Tray가 있어야 진행됩니다.'),
    sl(112,'Click the \'Job Open\' button, select the Job file, and click OK.','[Job Open] 버튼을 클릭하여 Job 파일을 선택하고 [확인]을 클릭합니다.'),
    sl(113,'After clicking Start, input the Lot ID and choose options: All Tray Are Loaded (inspect and end Lot vs. allow adding more trays), Sorting (use/don\'t use result-based sorting), Send 3D (store/don\'t store 3D debug data).',
       '[Start] 클릭 후 Lot ID를 입력하고 옵션을 선택합니다: All Tray Are Loaded(검사 후 Lot 종료 여부), Sorting(결과 기반 소팅 사용 여부), Send 3D(디버그용 3D 데이터 저장 여부).'),
    sl(114,'When the Loader Stacker tray sensor triggers, a pop-up appears. [Yes]: end the Lot without inserting more trays. [No]: insert more trays into the Loader Stacker, then click No to keep the Lot running.',
       'Loader Stacker의 트레이 센서가 감지되면 팝업이 나타납니다. [Yes]: 트레이 추가 투입 없이 Lot 종료. [No]: 트레이를 추가 투입 후 [No]를 클릭하여 Lot을 유지합니다.'),
    sl(115,'Click the \'Lot Cancel\' button to end the Lot. Confirm by clicking \'Yes\' in the pop-up window.','Lot을 종료하려면 [Lot Cancel] 버튼을 클릭하고, 팝업에서 [Yes]를 클릭하여 종료합니다.'),
    sl(116,'Empty Handler Start automatically removes trays remaining inside the equipment. UnClamp is used when removing a module\'s tray manually. Modules shown in green have a tray detected by the sensor.',
       'Empty Handler Start는 설비 내부에 남은 트레이를 자동으로 제거합니다. UnClamp는 모듈의 트레이를 수동 제거할 때 사용합니다. 녹색으로 표시된 모듈은 센서에 트레이가 감지된 상태입니다.')
  ]}
 ]}
];

/* ── 섹션별 이해도 확인 퀴즈 (객관식, 2문항) ── */
var PRELEARN_QUIZ={
'1.1.1':[
  {q:'What type of equipment is iSIS-SMTV?',qk:'iSIS-SMTV는 어떤 종류의 설비입니까?',choices:['Bump-AOI equipment','Wire-bonding equipment','Reflow oven','Wafer prober'],answer:0},
  {q:'Where is 3D thickness valuation inspection measured on?',qk:'Thickness Valuation 3D 검사는 어디에서 측정됩니까?',choices:['A moving conveyor belt','A suction jig with precise flatness','A rotating turntable','A water bath'],answer:1}
],
'1.1.2':[
  {q:'What kind of light source is suitable for WSI inspection?',qk:'WSI 검사에 적합한 광원의 특성은?',choices:['Single frequency and coherent light','Broadband white light','Any ambient light','Ultraviolet light only'],answer:0},
  {q:'What creates the interference pattern used to build the 3D Z-map?',qk:'3D Z-map을 만드는 데 사용되는 것은?',choices:['Signal strength of the interference pattern','Camera exposure time','Motor encoder position','Tray barcode data'],answer:0}
],
'1.2.1':[
  {q:'How many rails does the standard Rail System have?',qk:'표준 Rail System의 레일 수는?',choices:['3 Rail','5 Rail','7 Rail','9 Rail'],answer:2},
  {q:'How many sets of 3D Vision does the machine have?',qk:'설비의 3D Vision 세트 수는?',choices:['1 SET','2 SET','3 SET','4 SET'],answer:1}
],
'1.2.2':[
  {q:'What is the F.O.V of the 12M 3D Vision camera?',qk:'12M 3D Vision 카메라의 F.O.V는?',choices:['17.1 x 17.1 mm','22 x 16.5 mm','10 x 10 mm','30 x 30 mm'],answer:1},
  {q:'What AF method does the 3D Vision module use?',qk:'3D Vision 모듈이 사용하는 AF 방식은?',choices:['Contact-based autofocusing','Optical Triangulation Based Autofocusing','Manual focus only','Sonar-based ranging'],answer:1}
],
'1.2.3':[
  {q:'When are safety stickers attached?',qk:'안전 스티커는 언제 부착합니까?',choices:['Always in a fixed standard position','According to the customer\'s request','Only for export equipment','Never — they are optional'],answer:1}
],
'1.3.1':[
  {q:'Which PC is only turned on after the UPS is turned on?',qk:'UPS를 켠 후에만 켜는 PC는?',choices:['2D Vision PC','3D Vision PC','Host PC','MSM controller'],answer:2},
  {q:'What does TTM stand for?',qk:'TTM은 무엇의 약자입니까?',choices:['Tray Transfer Module','Total Test Machine','Tool Torque Monitor','Test Track Manager'],answer:0}
],
'1.3.2':[
  {q:'How many EMS (Emergency Stop) buttons are installed on the equipment?',qk:'설비에 설치된 EMS(비상정지) 버튼의 개수는?',choices:['2','4','6','8'],answer:2},
  {q:'In Auto Mode, when does motor power get cut off?',qk:'Auto Mode에서 모터 전원이 차단되는 경우는?',choices:['When the upper door is unlocked','When the Reset button is pressed','When Teach Mode is selected','When the Job is saved'],answer:0}
],
'1.3.3':[
  {q:'What must happen if the bump area is larger than the F.O.V during 3D inspection?',qk:'3D 검사 시 Bump Area가 F.O.V보다 크면 어떻게 합니까?',choices:['Skip the inspection','Divide the inspection area into two or more','Reduce camera resolution','Stop the equipment'],answer:1},
  {q:'What happens to units after inspection in the Unit Sorting step?',qk:'Unit Sorting 단계에서 검사 후 유닛은 어떻게 됩니까?',choices:['They are classified as Good or Reject','They are re-inspected automatically','They are discarded','They are relabeled with a new barcode'],answer:0}
],
'2.1.1':[
  {q:'What air pressure should each air regulator maintain?',qk:'각 Air Regulator가 유지해야 하는 압력은?',choices:['1~2 bar','4~6 bar','10~12 bar','20~25 bar'],answer:1},
  {q:'In Teach mode, what is required to supply motor power when Reset is pushed?',qk:'Teach mode에서 Reset을 눌러 모터 전원을 공급하려면?',choices:['All EMS buttons must be in the pull (released) state','The main breaker must be off','The Job file must be open','The UPS must be off'],answer:0}
],
'2.1.2':[
  {q:'What happens automatically when the LED controller is turned on?',qk:'LED Controller를 켜면 자동으로 일어나는 일은?',choices:['The camera also turns on (varies by spec)','The Host PC shuts down','The PZT controller resets','The tray ejects'],answer:0}
],
'2.1.3':[
  {q:'In what order should the equipment be turned off?',qk:'설비를 끌 때의 올바른 순서는?',choices:['Same order as turning on','Reverse order of turning on','Any order is fine','Main panel first, then controllers'],answer:1}
],
'2.2.1':[
  {q:'Which key combination switches between HOST/Vision PC screens?',qk:'HOST/Vision PC 화면 전환 단축키는?',choices:['Alt+Tab','Ctrl+Ctrl+1~4','Ctrl+Alt+Del','F1~F4'],answer:1}
],
'2.2.2':[
  {q:'When can inspection proceed based on the system status?',qk:'검사를 진행할 수 있는 시스템 상태 조건은?',choices:['When all statuses show ready (green)','When only Vision is ready','As soon as the Host PC boots','After 5 minutes of warm-up'],answer:0}
],
'2.2.3':[
  {q:'Which button creates the information input window for product inspection?',qk:'제품 검사 정보 입력창을 생성하는 버튼은?',choices:['Job Save','Start','Pause','Log'],answer:1},
  {q:'What does the UPH field on the Host UI represent?',qk:'Host UI의 UPH 항목이 의미하는 것은?',choices:['Units produced per hour','Total unit count','Unit pass rate','Upload history'],answer:0}
],
'2.2.4':[
  {q:'What color change indicates the Handler has completed initialization?',qk:'Handler 초기화 완료 시 아이콘 색상 변화는?',choices:['Green to red','Red to green','Yellow to blue','No color change'],answer:1}
],
'2.3.1':[
  {q:'What is the minimum number of empty trays required in the Empty Stacker to start a Lot?',qk:'Lot을 시작하기 위해 Empty Stacker에 필요한 최소 Empty Tray 수는?',choices:['2','4','6','10'],answer:2},
  {q:'What does clicking \'Lot Cancel\' followed by \'Yes\' do?',qk:'[Lot Cancel] 후 [Yes]를 클릭하면?',choices:['Pauses the Lot temporarily','Ends the Lot','Restarts the equipment','Saves the current Job'],answer:1}
]
};
