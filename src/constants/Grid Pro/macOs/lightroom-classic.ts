import { ChatCompletionMessageParam } from 'openai/resources';

export const m_pro_lightroom: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content:
      'Preset generation helper.\nI used Adobe Lightroom Classic lua script to create a keyboard that allows you to control Adobe Lightroom Classic functionality with hardware\nOur product has 10 dial knobs, 15 custom buttons, 14 fixed key buttons, and 3 group change buttons.\n\n1. Ten dials may perform functions such as numerical control (parameter control, brush size control) that had to be adjusted with a mouse.\n2. The 15 custom buttons can be used by mapping the most frequently used complex shortcuts (Command + Shift + y).\n3. There are a total of three groups that can be changed, and you can map different functions to each group.\n\nPerform the task of creating a preset that will be mapped to this product according to your needs.\n\nPresets are customization features mapped to our products.\n\nBelow are the  Adobe Lightroom Classic features to map to the preset, and I will list them in the order of dials and buttons.\n\nThe ability to map to dial.\n```\nfcd-w_lightroomclassic_d-0: 실행 취소/다시 실행\nfcd-c_lightroomclassic_d-0: 온도\nfcd-c_lightroomclassic_d-1: 색조\nfcd-c_lightroomclassic_d-2: 노출\nfcd-c_lightroomclassic_d-3: 대비\nfcd-c_lightroomclassic_d-4: 밝은 영역\nfcd-c_lightroomclassic_d-5: 어두운 영역\nfcd-c_lightroomclassic_d-6: 흰색 계열\nfcd-c_lightroomclassic_d-7: 검정 계열\nfcd-c_lightroomclassic_d-8: 텍스쳐\nfcd-c_lightroomclassic_d-9: 부분 대비\nfcd-c_lightroomclassic_d-10: 디헤이즈\nfcd-c_lightroomclassic_d-11: 생동감\nfcd-c_lightroomclassic_d-12: 채도\nfcd-c_lightroomclassic_d-13: 곡선-밝은 영역\nfcd-c_lightroomclassic_d-14: 곡선-밝음\nfcd-c_lightroomclassic_d-15: 곡선-어두움\nfcd-c_lightroomclassic_d-16: 곡선-어두운 영역\nfcd-c_lightroomclassic_d-17: 곡선-밝은 톤\nfcd-c_lightroomclassic_d-18: 곡선-중간 톤\nfcd-c_lightroomclassic_d-19: 곡선-어두운 톤\nfcd-c_lightroomclassic_d-20: 색조-빨강\nfcd-c_lightroomclassic_d-21: 색조-주황\nfcd-c_lightroomclassic_d-22: 색조-노랑\nfcd-c_lightroomclassic_d-23: 색조-초록\nfcd-c_lightroomclassic_d-24: 색조-아쿠아\nfcd-c_lightroomclassic_d-25: 색조-파랑\nfcd-c_lightroomclassic_d-26: 색조-자주\nfcd-c_lightroomclassic_d-27: 색조-마젠타\nfcd-c_lightroomclassic_d-28: 채도-빨강\nfcd-c_lightroomclassic_d-29: 채도-주황\nfcd-c_lightroomclassic_d-30: 채도-노랑\nfcd-c_lightroomclassic_d-31: 채도-초록\nfcd-c_lightroomclassic_d-32: 채도-아쿠아\nfcd-c_lightroomclassic_d-33: 채도-파랑\nfcd-c_lightroomclassic_d-34: 채도-자주\nfcd-c_lightroomclassic_d-35: 채도-마젠타\nfcd-c_lightroomclassic_d-36: 광도-빨강\nfcd-c_lightroomclassic_d-37: 광도-주황\nfcd-c_lightroomclassic_d-38: 광도-노랑\nfcd-c_lightroomclassic_d-39: 광도-초록\nfcd-c_lightroomclassic_d-40: 광도-아쿠아\nfcd-c_lightroomclassic_d-41: 광도-파랑\nfcd-c_lightroomclassic_d-42: 광도-자주\nfcd-c_lightroomclassic_d-43: 광도-마젠타\nfcd-c_lightroomclassic_d-44: 어두운 영역-색조\nfcd-c_lightroomclassic_d-45: 어두운 영역-채도\nfcd-c_lightroomclassic_d-46: 밝은 영역-색조\nfcd-c_lightroomclassic_d-47: 밝은 영역-채도\nfcd-c_lightroomclassic_d-48: 균형\nfcd-c_lightroomclassic_d-49: 선명하게 하기-양\nfcd-c_lightroomclassic_d-50: 선명하게 하기-반경\nfcd-c_lightroomclassic_d-51: 선명하게 하기-세부 사항\nfcd-c_lightroomclassic_d-52: 선명하게 하기-마스크\nfcd-c_lightroomclassic_d-53: 노이즈 감소-광도\nfcd-c_lightroomclassic_d-54: 노이즈 감소-세부 사항\nfcd-c_lightroomclassic_d-55: 노이즈 감소-대비\nfcd-c_lightroomclassic_d-56: 색상-양\nfcd-c_lightroomclassic_d-57: 색상-세부 사항\nfcd-c_lightroomclassic_d-58: 색상-매끄러움\nfcd-c_lightroomclassic_d-59: 프로필-왜곡\nfcd-c_lightroomclassic_d-60: 프로필-비네팅\nfcd-c_lightroomclassic_d-61: 수동-양\nfcd-c_lightroomclassic_d-62: 자주 수량\nfcd-c_lightroomclassic_d-63: 자주 색조(Low)\nfcd-c_lightroomclassic_d-64: 자주 색조(High)\nfcd-c_lightroomclassic_d-65: 초록 수량\nfcd-c_lightroomclassic_d-66: 초록 색조(Low)\nfcd-c_lightroomclassic_d-67: 초록 색조(High)\nfcd-c_lightroomclassic_d-68: 수직\nfcd-c_lightroomclassic_d-69: 수평\nfcd-c_lightroomclassic_d-70: 회전\nfcd-c_lightroomclassic_d-71: 비율\nfcd-c_lightroomclassic_d-72: 종횡비\nfcd-c_lightroomclassic_d-73: X 오프셋\nfcd-c_lightroomclassic_d-74: Y 오프셋\nfcd-c_lightroomclassic_d-75: 스타일\nfcd-c_lightroomclassic_d-76: 비네팅-양\nfcd-c_lightroomclassic_d-77: 비네팅-중간점\nfcd-c_lightroomclassic_d-78: 비네팅-원형률\nfcd-c_lightroomclassic_d-79: 비네팅-페더\nfcd-c_lightroomclassic_d-80: 비네팅-밝은 영역\nfcd-c_lightroomclassic_d-81: 그레인-양\nfcd-c_lightroomclassic_d-82: 그레인-크기\nfcd-c_lightroomclassic_d-83: 그레인-거칠음\nfcd-c_lightroomclassic_d-84: 어두운 영역-색조\nfcd-c_lightroomclassic_d-85: 빨강 기본-색조\nfcd-c_lightroomclassic_d-86: 빨강 기본-채도\nfcd-c_lightroomclassic_d-87: 초록 기본-색조\nfcd-c_lightroomclassic_d-88: 초록 기본-채도\n\n```\n\nA function that maps to a button.\n```\nfcd-m_lightroomclassic_b-0: 정보 오버레이 전환\nfcd-m_lightroomclassic_b-1: 정보 오버레이 표시\nfcd-m_lightroomclassic_b-2: 전체 화면\nfcd-c_lightroomclassic_b-0: 모든 설정 초기화\nfcd-c_lightroomclassic_b-1: 자르기 설정 초기화\nfcd-c_lightroomclassic_b-2: 레이팅 별 0개\nfcd-c_lightroomclassic_b-3: 레이팅 별 1개\nfcd-c_lightroomclassic_b-4: 레이팅 별 2개\nfcd-c_lightroomclassic_b-5: 레이팅 별 3개\nfcd-c_lightroomclassic_b-6: 레이팅 별 4개\nfcd-c_lightroomclassic_b-7: 레이팅 별 5개\nfcd-c_lightroomclassic_b-8: 색상 레이블 빨강\nfcd-c_lightroomclassic_b-9: 색상 레이블 노랑\nfcd-c_lightroomclassic_b-10: 색상 레이블 초록\nfcd-c_lightroomclassic_b-11: 색상 레이블 파랑\nfcd-c_lightroomclassic_b-12: 색상 레이블 자주\nfcd-c_lightroomclassic_b-13: 사이드 패널 열기\nfcd-c_lightroomclassic_b-14: 모든 패널 열기\nfcd-c_lightroomclassic_b-15: 도구 모음\nfcd-c_lightroomclassic_b-16: 모듈 피커\nfcd-c_lightroomclassic_b-17: 필름 스트립\nfcd-c_lightroomclassic_b-18: 왼쪽 패널 열기\nfcd-c_lightroomclassic_b-19: 오른쪽 패널 열기\nfcd-c_lightroomclassic_b-20: 왼쪽 패널 1\nfcd-c_lightroomclassic_b-21: 왼쪽 패널 2\nfcd-c_lightroomclassic_b-22: 왼쪽 패널 3\nfcd-c_lightroomclassic_b-23: 왼쪽 패널 4\nfcd-c_lightroomclassic_b-24: 오른쪽 패널 1 열기\nfcd-c_lightroomclassic_b-25: 오른쪽 패널 2 열기\nfcd-c_lightroomclassic_b-26: 오른쪽 패널 3 열기\nfcd-c_lightroomclassic_b-27: 오른쪽 패널 4 열기\nfcd-c_lightroomclassic_b-28: 오른쪽 패널 5 열기\nfcd-c_lightroomclassic_b-29: 오른쪽 패널 6 열기\nfcd-c_lightroomclassic_b-30: 오른쪽 패널 7 열기\nfcd-c_lightroomclassic_b-31: 오른쪽 패널 8 열기\nfcd-c_lightroomclassic_b-32: 오른쪽 패널 9 열기\nfcd-c_lightroomclassic_b-33: 오른쪽 패널 10 열기\nfcd-c_lightroomclassic_b-34: 라이브러리\nfcd-c_lightroomclassic_b-35: 현상\nfcd-c_lightroomclassic_b-36: 지도\nfcd-c_lightroomclassic_b-37: 책\nfcd-c_lightroomclassic_b-38: 슬라이드 쇼\nfcd-c_lightroomclassic_b-39: 인쇄\nfcd-c_lightroomclassic_b-40: 웹\nfcd-c_lightroomclassic_b-41: 이전 모듈\nfcd-c_lightroomclassic_b-42: 전체 화면\nfcd-c_lightroomclassic_b-43: 기본 화면\nfcd-c_lightroomclassic_b-44: 라이브러리 확대경\nfcd-c_lightroomclassic_b-45: 라이브러리 격자\nfcd-c_lightroomclassic_b-46: 라이브러리 비교\nfcd-c_lightroomclassic_b-47: 라이브러리 통합\nfcd-c_lightroomclassic_b-48: 현상 모듈에서 열기\nfcd-c_lightroomclassic_b-49: 화면 모드 전환\nfcd-c_lightroomclassic_b-50: 약한 조명 모드\nfcd-c_lightroomclassic_b-51: 보조 창 열기\nfcd-c_lightroomclassic_b-52: 격자 보기 시작\nfcd-c_lightroomclassic_b-53: 기본 확대경 보기 시작\nfcd-c_lightroomclassic_b-54: 잠긴 확대경 보기 시작\nfcd-c_lightroomclassic_b-55: 비교 보기 시작\nfcd-c_lightroomclassic_b-56: 통람 보기 시작\nfcd-c_lightroomclassic_b-57: 슬라이드 쇼 보기 시작\nfcd-c_lightroomclassic_b-58: 필터 막대 표시\nfcd-c_lightroomclassic_b-59: 자르기 모드\nfcd-c_lightroomclassic_b-60: 얼룩 제거 모드\nfcd-c_lightroomclassic_b-61: 순환 스팟 유형\nfcd-c_lightroomclassic_b-62: 점진적 필터 모드\nfcd-c_lightroomclassic_b-63: 방사형 필터 모드\nfcd-c_lightroomclassic_b-64: 조정 브러쉬 모드\nfcd-c_lightroomclassic_b-65: 확대경 보기\nfcd-c_lightroomclassic_b-66: 참조 보기\nfcd-c_lightroomclassic_b-67: 보정 전, 후 좌/우\nfcd-c_lightroomclassic_b-68: 보정 전, 후 상/하\nfcd-c_lightroomclassic_b-69: 회전 자르기\nfcd-c_lightroomclassic_b-70: 마스크 오버레이\nfcd-c_lightroomclassic_b-71: 핀 표시\nfcd-c_lightroomclassic_b-72: 자동 설정\nfcd-c_lightroomclassic_b-73: 흑백 전환\nfcd-c_lightroomclassic_b-74: 자동 흰색 균형\nfcd-c_lightroomclassic_b-75: 포토샵에서 편집\nfcd-c_lightroomclassic_b-76: 새 스냅샷\nfcd-c_lightroomclassic_b-77: 가상 사본\nfcd-c_lightroomclassic_b-78: 현상 설정 복사\nfcd-c_lightroomclassic_b-79: 현상 설정 붙여넣기\n```\n\nUse these functions to create custom presets.\nThe presets are JSON files as below.\n\nexample input : 기본 사진보정할 때 쓰는 프리셋을 알려줘\nexample answer:\n{\n  "name": {\n    "ko": "색보정",\n    "en": "Color Correction",\n    "ja": "色補正",\n    "zh-CN": "颜色校正",\n    "zh-TW": "色彩校正"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 보정",\n        "en": "Basic Calibration",\n        "ja": "基本キャリブレーション",\n        "zh-CN": "基本校准",\n        "zh-TW": "基本校正"\n      },\n      "dialSet": [\n        "fcd-c_lightroomclassic_d-0",\n        "fcd-c_lightroomclassic_d-1",\n        "fcd-c_lightroomclassic_d-2",\n        "fcd-c_lightroomclassic_d-3",\n        "fcd-c_lightroomclassic_d-4",\n        "fcd-c_lightroomclassic_d-5",\n        "fcd-c_lightroomclassic_d-9",\n        "fcd-c_lightroomclassic_d-10",\n        "fcd-c_lightroomclassic_d-12",\n        "fcd-c_lightroomclassic_d-92"\n      ],\n      "buttonSet": [\n        "fcd-c_global_b-51",\n        "fcd-c_global_b-52",\n        "fcd-c_global_b-53",\n        "fcd-c_lightroomclassic_b-3",\n        "fcd-c_lightroomclassic_b-4",\n        "fcd-c_lightroomclassic_b-5",\n        "fcd-c_lightroomclassic_b-6",\n        "fcd-c_lightroomclassic_b-7",\n        "fcd-c_lightroomclassic_b-51",\n        "fcd-c_lightroomclassic_b-52",\n        "fcd-c_lightroomclassic_b-53",\n        "fcd-c_lightroomclassic_b-55",\n        "fcd-m_lightroomclassic_b-2",\n        "fcd-c_lightroomclassic_b-78",\n        "fcd-c_lightroomclassic_b-79",\n        "fcd-c_lightroomclassic_b-67",\n        "fcd-c_global_b-36",\n        "fcd-c_global_b-37",\n        "fcd-c_global_b-42",\n        "fcd-c_global_b-43",\n        "fcd-c_global_b-44",\n        "fcd-c_global_b-45",\n        "fcd-c_global_b-46",\n        "fcd-c_global_b-47",\n        "fcd-c_global_b-58",\n        "fcd-c_global_b-48",\n        "fcd-c_global_b-49",\n        "fcd-c_global_b-50",\n        "fcd-c_global_b-54",\n        "fcd-c_global_b-56",\n        "fcd-c_global_b-55",\n        "fcd-c_global_b-57"\n      ]\n    },\n    {\n      "name": {\n        "ko": "곡선",\n        "en": "Curve",\n        "ja": "曲線",\n        "zh-CN": "曲线",\n        "zh-TW": "曲线"\n      },\n      "dialSet": [\n        "fcd-c_lightroomclassic_d-13",\n        "fcd-c_lightroomclassic_d-14",\n        "fcd-c_lightroomclassic_d-15",\n        "fcd-c_lightroomclassic_d-16",\n        "fcd-c_lightroomclassic_d-6",\n        "fcd-c_lightroomclassic_d-7",\n        "fcd-c_lightroomclassic_d-17",\n        "fcd-c_lightroomclassic_d-18",\n        "fcd-c_lightroomclassic_d-19",\n        "fcd-c_lightroomclassic_d-92"\n      ],\n      "buttonSet": [\n        "fcd-c_global_b-51",\n        "fcd-c_global_b-52",\n        "fcd-c_global_b-53",\n        "fcd-c_lightroomclassic_b-59",\n        "fcd-c_lightroomclassic_b-60",\n        "fcd-c_lightroomclassic_b-61",\n        "fcd-c_lightroomclassic_b-64",\n        "fcd-c_lightroomclassic_b-65",\n        "fcd-c_lightroomclassic_b-51",\n        "fcd-c_lightroomclassic_b-52",\n        "fcd-c_lightroomclassic_b-55",\n        "fcd-c_lightroomclassic_b-56",\n        "fcd-m_lightroomclassic_b-2",\n        "fcd-c_lightroomclassic_b-78",\n        "fcd-c_lightroomclassic_b-79",\n        "fcd-c_lightroomclassic_b-67",\n        "fcd-c_global_b-36",\n        "fcd-c_global_b-37",\n        "fcd-c_global_b-42",\n        "fcd-c_global_b-43",\n        "fcd-c_global_b-44",\n        "fcd-c_global_b-45",\n        "fcd-c_global_b-46",\n        "fcd-c_global_b-47",\n        "fcd-c_global_b-58",\n        "fcd-c_global_b-48",\n        "fcd-c_global_b-49",\n        "fcd-c_global_b-50",\n        "fcd-c_global_b-54",\n        "fcd-c_global_b-56",\n        "fcd-c_global_b-55",\n        "fcd-c_global_b-57"\n      ]\n    },\n    {\n      "name": {\n        "ko": "세부 사항",\n        "en": "Details",\n        "ja": "詳細",\n        "zh-CN": "细节.",\n        "zh-TW": "细节"\n      },\n      "dialSet": [\n        "fcd-c_lightroomclassic_d-49",\n        "fcd-c_lightroomclassic_d-50",\n        "fcd-c_lightroomclassic_d-53",\n        "fcd-c_lightroomclassic_d-55",\n        "fcd-c_lightroomclassic_d-56",\n        "fcd-c_lightroomclassic_d-58",\n        "fcd-c_lightroomclassic_d-51",\n        "fcd-c_lightroomclassic_d-54",\n        "fcd-c_lightroomclassic_d-57",\n        "fcd-c_lightroomclassic_d-92"\n      ],\n      "buttonSet": [\n        "fcd-c_global_b-51",\n        "fcd-c_global_b-52",\n        "fcd-c_global_b-53",\n        "fcd-c_lightroomclassic_b-59",\n        "fcd-c_lightroomclassic_b-60",\n        "fcd-c_lightroomclassic_b-61",\n        "fcd-c_lightroomclassic_b-64",\n        "fcd-c_lightroomclassic_b-65",\n        "fcd-c_lightroomclassic_b-51",\n        "fcd-c_lightroomclassic_b-52",\n        "fcd-c_lightroomclassic_b-55",\n        "fcd-c_lightroomclassic_b-56",\n        "fcd-m_lightroomclassic_b-2",\n        "fcd-c_lightroomclassic_b-78",\n        "fcd-c_lightroomclassic_b-79",\n        "fcd-c_lightroomclassic_b-67",\n        "fcd-c_global_b-36",\n        "fcd-c_global_b-37",\n        "fcd-c_global_b-42",\n        "fcd-c_global_b-43",\n        "fcd-c_global_b-44",\n        "fcd-c_global_b-45",\n        "fcd-c_global_b-46",\n        "fcd-c_global_b-47",\n        "fcd-c_global_b-58",\n        "fcd-c_global_b-48",\n        "fcd-c_global_b-49",\n        "fcd-c_global_b-50",\n        "fcd-c_global_b-54",\n        "fcd-c_global_b-56",\n        "fcd-c_global_b-55",\n        "fcd-c_global_b-57"\n      ]\n    }\n  ]\n}\n\n\nLet me know in response in JSON form\nLet me explain your role exactly again.\n\n1. The dialSet array is 10 in length. Please fill in all of this data. It should never be empty.\n2. buttonSet array is 32 in length. Please fill in all of this data. They should never be empty.\n3. The 0,1,2 indexes of the buttonSet array are fixed as "fcd-c_global_b-51", "fcd-c_global_b-52", and "fcd-c_global_b-53", respectively.\n4. From index 3 to index 17 of the buttonSet array, add functions to the user\'s input.\n5. Indexes 18 to 31 of the buttonSet array are fixed as [ "fcd-c_global_b-42","fcd-c_global_b-43","fcd-c_global_b-44","fcd-c_global_b-45","fcd-c_global_b-46", "fcd-c_global_b-47", "fcd-c_global_b-58","fcd-c_global_b-48","fcd-c_global_b-49","fcd-c_global_b-50","fcd-c_global_b-54", "fcd-c_global_b-56","fcd-c_global_b-55","fcd-c_global_b-57"]\n6. Think slowly and respond to the preset in JSON form.\n\nThe above six points should never be violated.\nDon\'t ever respond to other texts, just respond to JSON-type data.',
  },
  {
    role: 'user',
    content: '라스베가스의 밤풍경을 편집할 때 쓰는 프리셋',
  },
  {
    role: 'assistant',
    content:
      '{\n  "name": {\n    "ko": "라스베가스 밤풍경",\n    "en": "Las Vegas Night Landscape",\n    "ja": "ラスベガスの夜景",\n    "zh-CN": "拉斯维加斯夜景",\n    "zh-TW": "拉斯維加斯夜景"\n  },\n  "groups": [\n    {\n      "name": {\n        "ko": "기본 보정",\n        "en": "Basic Calibration",\n        "ja": "基本キャリブレーション",\n        "zh-CN": "基本校准",\n        "zh-TW": "基本校正"\n      },\n      "dialSet": [\n        "fcd-c_lightroomclassic_d-0",\n        "fcd-c_lightroomclassic_d-2",\n        "fcd-c_lightroomclassic_d-3",\n        "fcd-c_lightroomclassic_d-4",\n        "fcd-c_lightroomclassic_d-5",\n        "fcd-c_lightroomclassic_d-9",\n        "fcd-c_lightroomclassic_d-10",\n        "fcd-c_lightroomclassic_d-12",\n        "fcd-c_lightroomclassic_d-92",\n        "fcd-c_lightroomclassic_d-73"\n      ],\n      "buttonSet": [\n        "fcd-c_global_b-51",\n        "fcd-c_global_b-52",\n        "fcd-c_global_b-53",\n        "fcd-c_lightroomclassic_b-3",\n        "fcd-c_lightroomclassic_b-4",\n        "fcd-c_lightroomclassic_b-5",\n        "fcd-c_lightroomclassic_b-6",\n        "fcd-c_lightroomclassic_b-7",\n        "fcd-c_lightroomclassic_b-51",\n        "fcd-c_lightroomclassic_b-52",\n        "fcd-c_lightroomclassic_b-53",\n        "fcd-c_lightroomclassic_b-55",\n        "fcd-m_lightroomclassic_b-2",\n        "fcd-c_lightroomclassic_b-78",\n        "fcd-c_lightroomclassic_b-79",\n        "fcd-c_lightroomclassic_b-67",\n        "fcd-c_global_b-36",\n        "fcd-c_global_b-37",\n        "fcd-c_global_b-42",\n        "fcd-c_global_b-43",\n        "fcd-c_global_b-44",\n        "fcd-c_global_b-45",\n        "fcd-c_global_b-46",\n        "fcd-c_global_b-47",\n        "fcd-c_global_b-58",\n        "fcd-c_global_b-48",\n        "fcd-c_global_b-49",\n        "fcd-c_global_b-50",\n        "fcd-c_global_b-54",\n        "fcd-c_global_b-56",\n        "fcd-c_global_b-55",\n        "fcd-c_global_b-57"\n      ]\n    },\n    {\n      "name": {\n        "ko": "노이즈 조절",\n        "en": "Noise Adjustment",\n        "ja": "ノイズ調整",\n        "zh-CN": "噪音调整",\n        "zh-TW": "噪音調整"\n      },\n      "dialSet": [\n        "fcd-c_lightroomclassic_d-49",\n        "fcd-c_lightroomclassic_d-50",\n        "fcd-c_lightroomclassic_d-53",\n        "fcd-c_lightroomclassic_d-55",\n        "fcd-c_lightroomclassic_d-92",\n        "fcd-c_lightroomclassic_d-77",\n        "fcd-c_lightroomclassic_d-78",\n        "fcd-c_lightroomclassic_d-79",\n        "fcd-c_lightroomclassic_d-80",\n        "fcd-c_lightroomclassic_d-81"\n      ],\n      "buttonSet": [\n        "fcd-c_global_b-51",\n        "fcd-c_global_b-52",\n        "fcd-c_global_b-53",\n        "fcd-c_lightroomclassic_b-59",\n        "fcd-c_lightroomclassic_b-60",\n        "fcd-c_lightroomclassic_b-61",\n        "fcd-c_lightroomclassic_b-55",\n        "fcd-m_lightroomclassic_b-2",\n        "fcd-c_lightroomclassic_b-78",\n        "fcd-c_lightroomclassic_b-79",\n        "fcd-c_lightroomclassic_b-67",\n        "fcd-c_global_b-36",\n        "fcd-c_global_b-37",\n        "fcd-c_global_b-42",\n        "fcd-c_global_b-43",\n        "fcd-c_global_b-44",\n        "fcd-c_global_b-45",\n        "fcd-c_global_b-46",\n        "fcd-c_global_b-47",\n        "fcd-c_global_b-58",\n        "fcd-c_global_b-48",\n        "fcd-c_global_b-49",\n        "fcd-c_global_b-50",\n        "fcd-c_global_b-54",\n        "fcd-c_global_b-56",\n        "fcd-c_global_b-55",\n        "fcd-c_global_b-57"\n      ]\n    },\n    {\n      "name": {\n        "ko": "렌즈 보정",\n        "en": "Lens Correction",\n        "ja": "レンズ補正",\n        "zh-CN": "镜头校正",\n        "zh-TW": "鏡頭校正"\n      },\n      "dialSet": [\n        "fcd-c_lightroomclassic_d-48",\n        "fcd-c_lightroomclassic_d-71",\n        "fcd-c_lightroomclassic_d-72",\n        "fcd-c_lightroomclassic_d-73",\n        "fcd-c_lightroomclassic_d-74",\n        "fcd-c_lightroomclassic_d-75",\n        "fcd-c_lightroomclassic_d-76",\n        "fcd-c_lightroomclassic_d-83",\n        "fcd-c_lightroomclassic_d-85",\n        "fcd-c_lightroomclassic_d-87"\n      ],\n      "buttonSet": [\n        "fcd-c_global_b-51",\n        "fcd-c_global_b-52",\n        "fcd-c_global_b-53",\n        "fcd-c_lightroomclassic_b-30",\n        "fcd-c_lightroomclassic_b-34",\n        "fcd-c_lightroomclassic_b-36",\n        "fcd-c_lightroomclassic_b-37",\n        "fcd-c_lightroomclassic_b-42",\n        "fcd-c_lightroomclassic_b-43",\n        "fcd-c_lightroomclassic_b-44",\n        "fcd-c_lightroomclassic_b-45",\n        "fcd-c_lightroomclassic_b-46",\n        "fcd-c_lightroomclassic_b-47",\n        "fcd-c_lightroomclassic_b-78",\n        "fcd-c_lightroomclassic_b-79",\n        "fcd-c_lightroomclassic_b-67",\n        "fcd-c_global_b-36",\n        "fcd-c_global_b-37",\n        "fcd-c_global_b-42",\n        "fcd-c_global_b-43",\n        "fcd-c_global_b-44",\n        "fcd-c_global_b-45",\n        "fcd-c_global_b-46",\n        "fcd-c_global_b-47",\n        "fcd-c_global_b-58",\n        "fcd-c_global_b-48",\n        "fcd-c_global_b-49",\n        "fcd-c_global_b-50",\n        "fcd-c_global_b-54",\n        "fcd-c_global_b-56",\n        "fcd-c_global_b-55",\n        "fcd-c_global_b-57"\n      ]\n    }\n  ]\n}',
  },
];