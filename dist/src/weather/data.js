"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weatherList = [
    {
        address: '中华人民共和国',
        code: '100000',
    },
    {
        address: '北京市',
        code: '110000',
    },
    {
        address: '北京市市辖区',
        code: '110100',
    },
    {
        address: '东城区',
        code: '110101',
    },
    {
        address: '西城区',
        code: '110102',
    },
    {
        address: '朝阳区',
        code: '110105',
    },
    {
        address: '丰台区',
        code: '110106',
    },
    {
        address: '石景山区',
        code: '110107',
    },
    {
        address: '海淀区',
        code: '110108',
    },
    {
        address: '门头沟区',
        code: '110109',
    },
    {
        address: '房山区',
        code: '110111',
    },
    {
        address: '通州区',
        code: '110112',
    },
    {
        address: '顺义区',
        code: '110113',
    },
    {
        address: '昌平区',
        code: '110114',
    },
    {
        address: '大兴区',
        code: '110115',
    },
    {
        address: '怀柔区',
        code: '110116',
    },
    {
        address: '平谷区',
        code: '110117',
    },
    {
        address: '密云区',
        code: '110118',
    },
    {
        address: '延庆区',
        code: '110119',
    },
    {
        address: '天津市',
        code: '120000',
    },
    {
        address: '天津市市辖区',
        code: '120100',
    },
    {
        address: '和平区',
        code: '120101',
    },
    {
        address: '河东区',
        code: '120102',
    },
    {
        address: '河西区',
        code: '120103',
    },
    {
        address: '南开区',
        code: '120104',
    },
    {
        address: '河北区',
        code: '120105',
    },
    {
        address: '红桥区',
        code: '120106',
    },
    {
        address: '东丽区',
        code: '120110',
    },
    {
        address: '西青区',
        code: '120111',
    },
    {
        address: '津南区',
        code: '120112',
    },
    {
        address: '北辰区',
        code: '120113',
    },
    {
        address: '武清区',
        code: '120114',
    },
    {
        address: '宝坻区',
        code: '120115',
    },
    {
        address: '滨海新区',
        code: '120116',
    },
    {
        address: '宁河区',
        code: '120117',
    },
    {
        address: '静海区',
        code: '120118',
    },
    {
        address: '蓟州区',
        code: '120119',
    },
    {
        address: '河北省',
        code: '130000',
    },
    {
        address: '石家庄市',
        code: '130100',
    },
    {
        address: '石家庄市市辖区',
        code: '130101',
    },
    {
        address: '长安区',
        code: '130102',
    },
    {
        address: '桥西区',
        code: '130104',
    },
    {
        address: '新华区',
        code: '130105',
    },
    {
        address: '井陉矿区',
        code: '130107',
    },
    {
        address: '裕华区',
        code: '130108',
    },
    {
        address: '藁城区',
        code: '130109',
    },
    {
        address: '鹿泉区',
        code: '130110',
    },
    {
        address: '栾城区',
        code: '130111',
    },
    {
        address: '井陉县',
        code: '130121',
    },
    {
        address: '正定县',
        code: '130123',
    },
    {
        address: '行唐县',
        code: '130125',
    },
    {
        address: '灵寿县',
        code: '130126',
    },
    {
        address: '高邑县',
        code: '130127',
    },
    {
        address: '深泽县',
        code: '130128',
    },
    {
        address: '赞皇县',
        code: '130129',
    },
    {
        address: '无极县',
        code: '130130',
    },
    {
        address: '平山县',
        code: '130131',
    },
    {
        address: '元氏县',
        code: '130132',
    },
    {
        address: '赵县',
        code: '130133',
    },
    {
        address: '辛集市',
        code: '130181',
    },
    {
        address: '晋州市',
        code: '130183',
    },
    {
        address: '新乐市',
        code: '130184',
    },
    {
        address: '唐山市',
        code: '130200',
    },
    {
        address: '唐山市市辖区',
        code: '130201',
    },
    {
        address: '路南区',
        code: '130202',
    },
    {
        address: '路北区',
        code: '130203',
    },
    {
        address: '古冶区',
        code: '130204',
    },
    {
        address: '开平区',
        code: '130205',
    },
    {
        address: '丰南区',
        code: '130207',
    },
    {
        address: '丰润区',
        code: '130208',
    },
    {
        address: '曹妃甸区',
        code: '130209',
    },
    {
        address: '滦州市',
        code: '130284',
    },
    {
        address: '滦南县',
        code: '130224',
    },
    {
        address: '乐亭县',
        code: '130225',
    },
    {
        address: '迁西县',
        code: '130227',
    },
    {
        address: '玉田县',
        code: '130229',
    },
    {
        address: '遵化市',
        code: '130281',
    },
    {
        address: '迁安市',
        code: '130283',
    },
    {
        address: '秦皇岛市',
        code: '130300',
    },
    {
        address: '秦皇岛市市辖区',
        code: '130301',
    },
    {
        address: '海港区',
        code: '130302',
    },
    {
        address: '山海关区',
        code: '130303',
    },
    {
        address: '北戴河区',
        code: '130304',
    },
    {
        address: '抚宁区',
        code: '130306',
    },
    {
        address: '青龙满族自治县',
        code: '130321',
    },
    {
        address: '昌黎县',
        code: '130322',
    },
    {
        address: '卢龙县',
        code: '130324',
    },
    {
        address: '邯郸市',
        code: '130400',
    },
    {
        address: '邯郸市市辖区',
        code: '130401',
    },
    {
        address: '邯山区',
        code: '130402',
    },
    {
        address: '丛台区',
        code: '130403',
    },
    {
        address: '复兴区',
        code: '130404',
    },
    {
        address: '峰峰矿区',
        code: '130406',
    },
    {
        address: '肥乡区',
        code: '130407',
    },
    {
        address: '永年区',
        code: '130408',
    },
    {
        address: '临漳县',
        code: '130423',
    },
    {
        address: '成安县',
        code: '130424',
    },
    {
        address: '大名县',
        code: '130425',
    },
    {
        address: '涉县',
        code: '130426',
    },
    {
        address: '磁县',
        code: '130427',
    },
    {
        address: '邱县',
        code: '130430',
    },
    {
        address: '鸡泽县',
        code: '130431',
    },
    {
        address: '广平县',
        code: '130432',
    },
    {
        address: '馆陶县',
        code: '130433',
    },
    {
        address: '魏县',
        code: '130434',
    },
    {
        address: '曲周县',
        code: '130435',
    },
    {
        address: '武安市',
        code: '130481',
    },
    {
        address: '邢台市',
        code: '130500',
    },
    {
        address: '邢台市市辖区',
        code: '130501',
    },
    {
        address: '襄都区',
        code: '130502',
    },
    {
        address: '信都区',
        code: '130503',
    },
    {
        address: '临城县',
        code: '130522',
    },
    {
        address: '内丘县',
        code: '130523',
    },
    {
        address: '柏乡县',
        code: '130524',
    },
    {
        address: '隆尧县',
        code: '130525',
    },
    {
        address: '任泽区',
        code: '130505',
    },
    {
        address: '南和区',
        code: '130506',
    },
    {
        address: '宁晋县',
        code: '130528',
    },
    {
        address: '巨鹿县',
        code: '130529',
    },
    {
        address: '新河县',
        code: '130530',
    },
    {
        address: '广宗县',
        code: '130531',
    },
    {
        address: '平乡县',
        code: '130532',
    },
    {
        address: '威县',
        code: '130533',
    },
    {
        address: '清河县',
        code: '130534',
    },
    {
        address: '临西县',
        code: '130535',
    },
    {
        address: '南宫市',
        code: '130581',
    },
    {
        address: '沙河市',
        code: '130582',
    },
    {
        address: '保定市',
        code: '130600',
    },
    {
        address: '保定市市辖区',
        code: '130601',
    },
    {
        address: '竞秀区',
        code: '130602',
    },
    {
        address: '莲池区',
        code: '130606',
    },
    {
        address: '满城区',
        code: '130607',
    },
    {
        address: '清苑区',
        code: '130608',
    },
    {
        address: '徐水区',
        code: '130609',
    },
    {
        address: '涞水县',
        code: '130623',
    },
    {
        address: '阜平县',
        code: '130624',
    },
    {
        address: '定兴县',
        code: '130626',
    },
    {
        address: '唐县',
        code: '130627',
    },
    {
        address: '高阳县',
        code: '130628',
    },
    {
        address: '容城县',
        code: '130629',
    },
    {
        address: '涞源县',
        code: '130630',
    },
    {
        address: '望都县',
        code: '130631',
    },
    {
        address: '安新县',
        code: '130632',
    },
    {
        address: '易县',
        code: '130633',
    },
    {
        address: '曲阳县',
        code: '130634',
    },
    {
        address: '蠡县',
        code: '130635',
    },
    {
        address: '顺平县',
        code: '130636',
    },
    {
        address: '博野县',
        code: '130637',
    },
    {
        address: '雄县',
        code: '130638',
    },
    {
        address: '涿州市',
        code: '130681',
    },
    {
        address: '定州市',
        code: '130682',
    },
    {
        address: '安国市',
        code: '130683',
    },
    {
        address: '高碑店市',
        code: '130684',
    },
    {
        address: '张家口市',
        code: '130700',
    },
    {
        address: '张家口市市辖区',
        code: '130701',
    },
    {
        address: '桥东区',
        code: '130702',
    },
    {
        address: '桥西区',
        code: '130703',
    },
    {
        address: '宣化区',
        code: '130705',
    },
    {
        address: '下花园区',
        code: '130706',
    },
    {
        address: '万全区',
        code: '130708',
    },
    {
        address: '崇礼区',
        code: '130709',
    },
    {
        address: '张北县',
        code: '130722',
    },
    {
        address: '康保县',
        code: '130723',
    },
    {
        address: '沽源县',
        code: '130724',
    },
    {
        address: '尚义县',
        code: '130725',
    },
    {
        address: '蔚县',
        code: '130726',
    },
    {
        address: '阳原县',
        code: '130727',
    },
    {
        address: '怀安县',
        code: '130728',
    },
    {
        address: '怀来县',
        code: '130730',
    },
    {
        address: '涿鹿县',
        code: '130731',
    },
    {
        address: '赤城县',
        code: '130732',
    },
    {
        address: '承德市',
        code: '130800',
    },
    {
        address: '承德市市辖区',
        code: '130801',
    },
    {
        address: '双桥区',
        code: '130802',
    },
    {
        address: '双滦区',
        code: '130803',
    },
    {
        address: '鹰手营子矿区',
        code: '130804',
    },
    {
        address: '承德县',
        code: '130821',
    },
    {
        address: '兴隆县',
        code: '130822',
    },
    {
        address: '滦平县',
        code: '130824',
    },
    {
        address: '隆化县',
        code: '130825',
    },
    {
        address: '丰宁满族自治县',
        code: '130826',
    },
    {
        address: '宽城满族自治县',
        code: '130827',
    },
    {
        address: '围场满族蒙古族自治县',
        code: '130828',
    },
    {
        address: '平泉市',
        code: '130881',
    },
    {
        address: '沧州市',
        code: '130900',
    },
    {
        address: '沧州市市辖区',
        code: '130901',
    },
    {
        address: '新华区',
        code: '130902',
    },
    {
        address: '运河区',
        code: '130903',
    },
    {
        address: '沧县',
        code: '130921',
    },
    {
        address: '青县',
        code: '130922',
    },
    {
        address: '东光县',
        code: '130923',
    },
    {
        address: '海兴县',
        code: '130924',
    },
    {
        address: '盐山县',
        code: '130925',
    },
    {
        address: '肃宁县',
        code: '130926',
    },
    {
        address: '南皮县',
        code: '130927',
    },
    {
        address: '吴桥县',
        code: '130928',
    },
    {
        address: '献县',
        code: '130929',
    },
    {
        address: '孟村回族自治县',
        code: '130930',
    },
    {
        address: '泊头市',
        code: '130981',
    },
    {
        address: '任丘市',
        code: '130982',
    },
    {
        address: '黄骅市',
        code: '130983',
    },
    {
        address: '河间市',
        code: '130984',
    },
    {
        address: '廊坊市',
        code: '131000',
    },
    {
        address: '廊坊市市辖区',
        code: '131001',
    },
    {
        address: '安次区',
        code: '131002',
    },
    {
        address: '广阳区',
        code: '131003',
    },
    {
        address: '固安县',
        code: '131022',
    },
    {
        address: '永清县',
        code: '131023',
    },
    {
        address: '香河县',
        code: '131024',
    },
    {
        address: '大城县',
        code: '131025',
    },
    {
        address: '文安县',
        code: '131026',
    },
    {
        address: '大厂回族自治县',
        code: '131028',
    },
    {
        address: '霸州市',
        code: '131081',
    },
    {
        address: '三河市',
        code: '131082',
    },
    {
        address: '衡水市',
        code: '131100',
    },
    {
        address: '衡水市市辖区',
        code: '131101',
    },
    {
        address: '桃城区',
        code: '131102',
    },
    {
        address: '冀州区',
        code: '131103',
    },
    {
        address: '枣强县',
        code: '131121',
    },
    {
        address: '武邑县',
        code: '131122',
    },
    {
        address: '武强县',
        code: '131123',
    },
    {
        address: '饶阳县',
        code: '131124',
    },
    {
        address: '安平县',
        code: '131125',
    },
    {
        address: '故城县',
        code: '131126',
    },
    {
        address: '景县',
        code: '131127',
    },
    {
        address: '阜城县',
        code: '131128',
    },
    {
        address: '深州市',
        code: '131182',
    },
    {
        address: '山西省',
        code: '140000',
    },
    {
        address: '太原市',
        code: '140100',
    },
    {
        address: '太原市市辖区',
        code: '140101',
    },
    {
        address: '小店区',
        code: '140105',
    },
    {
        address: '迎泽区',
        code: '140106',
    },
    {
        address: '杏花岭区',
        code: '140107',
    },
    {
        address: '尖草坪区',
        code: '140108',
    },
    {
        address: '万柏林区',
        code: '140109',
    },
    {
        address: '晋源区',
        code: '140110',
    },
    {
        address: '清徐县',
        code: '140121',
    },
    {
        address: '阳曲县',
        code: '140122',
    },
    {
        address: '娄烦县',
        code: '140123',
    },
    {
        address: '古交市',
        code: '140181',
    },
    {
        address: '大同市',
        code: '140200',
    },
    {
        address: '大同市市辖区',
        code: '140201',
    },
    {
        address: '平城区',
        code: '140213',
    },
    {
        address: '云冈区',
        code: '140214',
    },
    {
        address: '新荣区',
        code: '140212',
    },
    {
        address: '阳高县',
        code: '140221',
    },
    {
        address: '天镇县',
        code: '140222',
    },
    {
        address: '广灵县',
        code: '140223',
    },
    {
        address: '灵丘县',
        code: '140224',
    },
    {
        address: '浑源县',
        code: '140225',
    },
    {
        address: '左云县',
        code: '140226',
    },
    {
        address: '云州区',
        code: '140215',
    },
    {
        address: '阳泉市',
        code: '140300',
    },
    {
        address: '阳泉市市辖区',
        code: '140301',
    },
    {
        address: '城区',
        code: '140302',
    },
    {
        address: '矿区',
        code: '140303',
    },
    {
        address: '郊区',
        code: '140311',
    },
    {
        address: '平定县',
        code: '140321',
    },
    {
        address: '盂县',
        code: '140322',
    },
    {
        address: '长治市',
        code: '140400',
    },
    {
        address: '长治市市辖区',
        code: '140401',
    },
    {
        address: '潞州区',
        code: '140403',
    },
    {
        address: '上党区',
        code: '140404',
    },
    {
        address: '襄垣县',
        code: '140423',
    },
    {
        address: '屯留区',
        code: '140405',
    },
    {
        address: '平顺县',
        code: '140425',
    },
    {
        address: '黎城县',
        code: '140426',
    },
    {
        address: '壶关县',
        code: '140427',
    },
    {
        address: '长子县',
        code: '140428',
    },
    {
        address: '武乡县',
        code: '140429',
    },
    {
        address: '沁县',
        code: '140430',
    },
    {
        address: '沁源县',
        code: '140431',
    },
    {
        address: '潞城区',
        code: '140406',
    },
    {
        address: '晋城市',
        code: '140500',
    },
    {
        address: '晋城市市辖区',
        code: '140501',
    },
    {
        address: '城区',
        code: '140502',
    },
    {
        address: '沁水县',
        code: '140521',
    },
    {
        address: '阳城县',
        code: '140522',
    },
    {
        address: '陵川县',
        code: '140524',
    },
    {
        address: '泽州县',
        code: '140525',
    },
    {
        address: '高平市',
        code: '140581',
    },
    {
        address: '朔州市',
        code: '140600',
    },
    {
        address: '朔州市市辖区',
        code: '140601',
    },
    {
        address: '朔城区',
        code: '140602',
    },
    {
        address: '平鲁区',
        code: '140603',
    },
    {
        address: '山阴县',
        code: '140621',
    },
    {
        address: '应县',
        code: '140622',
    },
    {
        address: '右玉县',
        code: '140623',
    },
    {
        address: '怀仁市',
        code: '140681',
    },
    {
        address: '晋中市',
        code: '140700',
    },
    {
        address: '晋中市市辖区',
        code: '140701',
    },
    {
        address: '榆次区',
        code: '140702',
    },
    {
        address: '榆社县',
        code: '140721',
    },
    {
        address: '左权县',
        code: '140722',
    },
    {
        address: '和顺县',
        code: '140723',
    },
    {
        address: '昔阳县',
        code: '140724',
    },
    {
        address: '寿阳县',
        code: '140725',
    },
    {
        address: '太谷区',
        code: '140703',
    },
    {
        address: '祁县',
        code: '140727',
    },
    {
        address: '平遥县',
        code: '140728',
    },
    {
        address: '灵石县',
        code: '140729',
    },
    {
        address: '介休市',
        code: '140781',
    },
    {
        address: '运城市',
        code: '140800',
    },
    {
        address: '运城市市辖区',
        code: '140801',
    },
    {
        address: '盐湖区',
        code: '140802',
    },
    {
        address: '临猗县',
        code: '140821',
    },
    {
        address: '万荣县',
        code: '140822',
    },
    {
        address: '闻喜县',
        code: '140823',
    },
    {
        address: '稷山县',
        code: '140824',
    },
    {
        address: '新绛县',
        code: '140825',
    },
    {
        address: '绛县',
        code: '140826',
    },
    {
        address: '垣曲县',
        code: '140827',
    },
    {
        address: '夏县',
        code: '140828',
    },
    {
        address: '平陆县',
        code: '140829',
    },
    {
        address: '芮城县',
        code: '140830',
    },
    {
        address: '永济市',
        code: '140881',
    },
    {
        address: '河津市',
        code: '140882',
    },
    {
        address: '忻州市',
        code: '140900',
    },
    {
        address: '忻州市市辖区',
        code: '140901',
    },
    {
        address: '忻府区',
        code: '140902',
    },
    {
        address: '定襄县',
        code: '140921',
    },
    {
        address: '五台县',
        code: '140922',
    },
    {
        address: '代县',
        code: '140923',
    },
    {
        address: '繁峙县',
        code: '140924',
    },
    {
        address: '宁武县',
        code: '140925',
    },
    {
        address: '静乐县',
        code: '140926',
    },
    {
        address: '神池县',
        code: '140927',
    },
    {
        address: '五寨县',
        code: '140928',
    },
    {
        address: '岢岚县',
        code: '140929',
    },
    {
        address: '河曲县',
        code: '140930',
    },
    {
        address: '保德县',
        code: '140931',
    },
    {
        address: '偏关县',
        code: '140932',
    },
    {
        address: '原平市',
        code: '140981',
    },
    {
        address: '临汾市',
        code: '141000',
    },
    {
        address: '临汾市市辖区',
        code: '141001',
    },
    {
        address: '尧都区',
        code: '141002',
    },
    {
        address: '曲沃县',
        code: '141021',
    },
    {
        address: '翼城县',
        code: '141022',
    },
    {
        address: '襄汾县',
        code: '141023',
    },
    {
        address: '洪洞县',
        code: '141024',
    },
    {
        address: '古县',
        code: '141025',
    },
    {
        address: '安泽县',
        code: '141026',
    },
    {
        address: '浮山县',
        code: '141027',
    },
    {
        address: '吉县',
        code: '141028',
    },
    {
        address: '乡宁县',
        code: '141029',
    },
    {
        address: '大宁县',
        code: '141030',
    },
    {
        address: '隰县',
        code: '141031',
    },
    {
        address: '永和县',
        code: '141032',
    },
    {
        address: '蒲县',
        code: '141033',
    },
    {
        address: '汾西县',
        code: '141034',
    },
    {
        address: '侯马市',
        code: '141081',
    },
    {
        address: '霍州市',
        code: '141082',
    },
    {
        address: '吕梁市',
        code: '141100',
    },
    {
        address: '吕梁市市辖区',
        code: '141101',
    },
    {
        address: '离石区',
        code: '141102',
    },
    {
        address: '文水县',
        code: '141121',
    },
    {
        address: '交城县',
        code: '141122',
    },
    {
        address: '兴县',
        code: '141123',
    },
    {
        address: '临县',
        code: '141124',
    },
    {
        address: '柳林县',
        code: '141125',
    },
    {
        address: '石楼县',
        code: '141126',
    },
    {
        address: '岚县',
        code: '141127',
    },
    {
        address: '方山县',
        code: '141128',
    },
    {
        address: '中阳县',
        code: '141129',
    },
    {
        address: '交口县',
        code: '141130',
    },
    {
        address: '孝义市',
        code: '141181',
    },
    {
        address: '汾阳市',
        code: '141182',
    },
    {
        address: '内蒙古自治区',
        code: '150000',
    },
    {
        address: '呼和浩特市',
        code: '150100',
    },
    {
        address: '呼和浩特市市辖区',
        code: '150101',
    },
    {
        address: '新城区',
        code: '150102',
    },
    {
        address: '回民区',
        code: '150103',
    },
    {
        address: '玉泉区',
        code: '150104',
    },
    {
        address: '赛罕区',
        code: '150105',
    },
    {
        address: '土默特左旗',
        code: '150121',
    },
    {
        address: '托克托县',
        code: '150122',
    },
    {
        address: '和林格尔县',
        code: '150123',
    },
    {
        address: '清水河县',
        code: '150124',
    },
    {
        address: '武川县',
        code: '150125',
    },
    {
        address: '包头市',
        code: '150200',
    },
    {
        address: '包头市市辖区',
        code: '150201',
    },
    {
        address: '东河区',
        code: '150202',
    },
    {
        address: '昆都仑区',
        code: '150203',
    },
    {
        address: '青山区',
        code: '150204',
    },
    {
        address: '石拐区',
        code: '150205',
    },
    {
        address: '白云鄂博矿区',
        code: '150206',
    },
    {
        address: '九原区',
        code: '150207',
    },
    {
        address: '土默特右旗',
        code: '150221',
    },
    {
        address: '固阳县',
        code: '150222',
    },
    {
        address: '达尔罕茂明安联合旗',
        code: '150223',
    },
    {
        address: '乌海市',
        code: '150300',
    },
    {
        address: '乌海市市辖区',
        code: '150301',
    },
    {
        address: '海勃湾区',
        code: '150302',
    },
    {
        address: '海南区',
        code: '150303',
    },
    {
        address: '乌达区',
        code: '150304',
    },
    {
        address: '赤峰市',
        code: '150400',
    },
    {
        address: '赤峰市市辖区',
        code: '150401',
    },
    {
        address: '红山区',
        code: '150402',
    },
    {
        address: '元宝山区',
        code: '150403',
    },
    {
        address: '松山区',
        code: '150404',
    },
    {
        address: '阿鲁科尔沁旗',
        code: '150421',
    },
    {
        address: '巴林左旗',
        code: '150422',
    },
    {
        address: '巴林右旗',
        code: '150423',
    },
    {
        address: '林西县',
        code: '150424',
    },
    {
        address: '克什克腾旗',
        code: '150425',
    },
    {
        address: '翁牛特旗',
        code: '150426',
    },
    {
        address: '喀喇沁旗',
        code: '150428',
    },
    {
        address: '宁城县',
        code: '150429',
    },
    {
        address: '敖汉旗',
        code: '150430',
    },
    {
        address: '通辽市',
        code: '150500',
    },
    {
        address: '通辽市市辖区',
        code: '150501',
    },
    {
        address: '科尔沁区',
        code: '150502',
    },
    {
        address: '科尔沁左翼中旗',
        code: '150521',
    },
    {
        address: '科尔沁左翼后旗',
        code: '150522',
    },
    {
        address: '开鲁县',
        code: '150523',
    },
    {
        address: '库伦旗',
        code: '150524',
    },
    {
        address: '奈曼旗',
        code: '150525',
    },
    {
        address: '扎鲁特旗',
        code: '150526',
    },
    {
        address: '霍林郭勒市',
        code: '150581',
    },
    {
        address: '鄂尔多斯市',
        code: '150600',
    },
    {
        address: '鄂尔多斯市市辖区',
        code: '150601',
    },
    {
        address: '东胜区',
        code: '150602',
    },
    {
        address: '康巴什区',
        code: '150603',
    },
    {
        address: '达拉特旗',
        code: '150621',
    },
    {
        address: '准格尔旗',
        code: '150622',
    },
    {
        address: '鄂托克前旗',
        code: '150623',
    },
    {
        address: '鄂托克旗',
        code: '150624',
    },
    {
        address: '杭锦旗',
        code: '150625',
    },
    {
        address: '乌审旗',
        code: '150626',
    },
    {
        address: '伊金霍洛旗',
        code: '150627',
    },
    {
        address: '呼伦贝尔市',
        code: '150700',
    },
    {
        address: '呼伦贝尔市市辖区',
        code: '150701',
    },
    {
        address: '海拉尔区',
        code: '150702',
    },
    {
        address: '扎赉诺尔区',
        code: '150703',
    },
    {
        address: '阿荣旗',
        code: '150721',
    },
    {
        address: '莫力达瓦达斡尔族自治旗',
        code: '150722',
    },
    {
        address: '鄂伦春自治旗',
        code: '150723',
    },
    {
        address: '鄂温克族自治旗',
        code: '150724',
    },
    {
        address: '陈巴尔虎旗',
        code: '150725',
    },
    {
        address: '新巴尔虎左旗',
        code: '150726',
    },
    {
        address: '新巴尔虎右旗',
        code: '150727',
    },
    {
        address: '满洲里市',
        code: '150781',
    },
    {
        address: '牙克石市',
        code: '150782',
    },
    {
        address: '扎兰屯市',
        code: '150783',
    },
    {
        address: '额尔古纳市',
        code: '150784',
    },
    {
        address: '根河市',
        code: '150785',
    },
    {
        address: '巴彦淖尔市',
        code: '150800',
    },
    {
        address: '巴彦淖尔市市辖区',
        code: '150801',
    },
    {
        address: '临河区',
        code: '150802',
    },
    {
        address: '五原县',
        code: '150821',
    },
    {
        address: '磴口县',
        code: '150822',
    },
    {
        address: '乌拉特前旗',
        code: '150823',
    },
    {
        address: '乌拉特中旗',
        code: '150824',
    },
    {
        address: '乌拉特后旗',
        code: '150825',
    },
    {
        address: '杭锦后旗',
        code: '150826',
    },
    {
        address: '乌兰察布市',
        code: '150900',
    },
    {
        address: '乌兰察布市市辖区',
        code: '150901',
    },
    {
        address: '集宁区',
        code: '150902',
    },
    {
        address: '卓资县',
        code: '150921',
    },
    {
        address: '化德县',
        code: '150922',
    },
    {
        address: '商都县',
        code: '150923',
    },
    {
        address: '兴和县',
        code: '150924',
    },
    {
        address: '凉城县',
        code: '150925',
    },
    {
        address: '察哈尔右翼前旗',
        code: '150926',
    },
    {
        address: '察哈尔右翼中旗',
        code: '150927',
    },
    {
        address: '察哈尔右翼后旗',
        code: '150928',
    },
    {
        address: '四子王旗',
        code: '150929',
    },
    {
        address: '丰镇市',
        code: '150981',
    },
    {
        address: '兴安盟',
        code: '152200',
    },
    {
        address: '乌兰浩特市',
        code: '152201',
    },
    {
        address: '阿尔山市',
        code: '152202',
    },
    {
        address: '科尔沁右翼前旗',
        code: '152221',
    },
    {
        address: '科尔沁右翼中旗',
        code: '152222',
    },
    {
        address: '扎赉特旗',
        code: '152223',
    },
    {
        address: '突泉县',
        code: '152224',
    },
    {
        address: '锡林郭勒盟',
        code: '152500',
    },
    {
        address: '二连浩特市',
        code: '152501',
    },
    {
        address: '锡林浩特市',
        code: '152502',
    },
    {
        address: '阿巴嘎旗',
        code: '152522',
    },
    {
        address: '苏尼特左旗',
        code: '152523',
    },
    {
        address: '苏尼特右旗',
        code: '152524',
    },
    {
        address: '东乌珠穆沁旗',
        code: '152525',
    },
    {
        address: '西乌珠穆沁旗',
        code: '152526',
    },
    {
        address: '太仆寺旗',
        code: '152527',
    },
    {
        address: '镶黄旗',
        code: '152528',
    },
    {
        address: '正镶白旗',
        code: '152529',
    },
    {
        address: '正蓝旗',
        code: '152530',
    },
    {
        address: '多伦县',
        code: '152531',
    },
    {
        address: '阿拉善盟',
        code: '152900',
    },
    {
        address: '阿拉善左旗',
        code: '152921',
    },
    {
        address: '阿拉善右旗',
        code: '152922',
    },
    {
        address: '额济纳旗',
        code: '152923',
    },
    {
        address: '辽宁省',
        code: '210000',
    },
    {
        address: '沈阳市',
        code: '210100',
    },
    {
        address: '沈阳市市辖区',
        code: '210101',
    },
    {
        address: '和平区',
        code: '210102',
    },
    {
        address: '沈河区',
        code: '210103',
    },
    {
        address: '大东区',
        code: '210104',
    },
    {
        address: '皇姑区',
        code: '210105',
    },
    {
        address: '铁西区',
        code: '210106',
    },
    {
        address: '苏家屯区',
        code: '210111',
    },
    {
        address: '浑南区',
        code: '210112',
    },
    {
        address: '沈北新区',
        code: '210113',
    },
    {
        address: '于洪区',
        code: '210114',
    },
    {
        address: '辽中区',
        code: '210115',
    },
    {
        address: '康平县',
        code: '210123',
    },
    {
        address: '法库县',
        code: '210124',
    },
    {
        address: '新民市',
        code: '210181',
    },
    {
        address: '大连市',
        code: '210200',
    },
    {
        address: '大连市市辖区',
        code: '210201',
    },
    {
        address: '中山区',
        code: '210202',
    },
    {
        address: '西岗区',
        code: '210203',
    },
    {
        address: '沙河口区',
        code: '210204',
    },
    {
        address: '甘井子区',
        code: '210211',
    },
    {
        address: '旅顺口区',
        code: '210212',
    },
    {
        address: '金州区',
        code: '210213',
    },
    {
        address: '普兰店区',
        code: '210214',
    },
    {
        address: '长海县',
        code: '210224',
    },
    {
        address: '瓦房店市',
        code: '210281',
    },
    {
        address: '庄河市',
        code: '210283',
    },
    {
        address: '鞍山市',
        code: '210300',
    },
    {
        address: '鞍山市市辖区',
        code: '210301',
    },
    {
        address: '铁东区',
        code: '210302',
    },
    {
        address: '铁西区',
        code: '210303',
    },
    {
        address: '立山区',
        code: '210304',
    },
    {
        address: '千山区',
        code: '210311',
    },
    {
        address: '台安县',
        code: '210321',
    },
    {
        address: '岫岩满族自治县',
        code: '210323',
    },
    {
        address: '海城市',
        code: '210381',
    },
    {
        address: '抚顺市',
        code: '210400',
    },
    {
        address: '抚顺市市辖区',
        code: '210401',
    },
    {
        address: '新抚区',
        code: '210402',
    },
    {
        address: '东洲区',
        code: '210403',
    },
    {
        address: '望花区',
        code: '210404',
    },
    {
        address: '顺城区',
        code: '210411',
    },
    {
        address: '抚顺县',
        code: '210421',
    },
    {
        address: '新宾满族自治县',
        code: '210422',
    },
    {
        address: '清原满族自治县',
        code: '210423',
    },
    {
        address: '本溪市',
        code: '210500',
    },
    {
        address: '本溪市市辖区',
        code: '210501',
    },
    {
        address: '平山区',
        code: '210502',
    },
    {
        address: '溪湖区',
        code: '210503',
    },
    {
        address: '明山区',
        code: '210504',
    },
    {
        address: '南芬区',
        code: '210505',
    },
    {
        address: '本溪满族自治县',
        code: '210521',
    },
    {
        address: '桓仁满族自治县',
        code: '210522',
    },
    {
        address: '丹东市',
        code: '210600',
    },
    {
        address: '丹东市市辖区',
        code: '210601',
    },
    {
        address: '元宝区',
        code: '210602',
    },
    {
        address: '振兴区',
        code: '210603',
    },
    {
        address: '振安区',
        code: '210604',
    },
    {
        address: '宽甸满族自治县',
        code: '210624',
    },
    {
        address: '东港市',
        code: '210681',
    },
    {
        address: '凤城市',
        code: '210682',
    },
    {
        address: '锦州市',
        code: '210700',
    },
    {
        address: '锦州市市辖区',
        code: '210701',
    },
    {
        address: '古塔区',
        code: '210702',
    },
    {
        address: '凌河区',
        code: '210703',
    },
    {
        address: '太和区',
        code: '210711',
    },
    {
        address: '黑山县',
        code: '210726',
    },
    {
        address: '义县',
        code: '210727',
    },
    {
        address: '凌海市',
        code: '210781',
    },
    {
        address: '北镇市',
        code: '210782',
    },
    {
        address: '营口市',
        code: '210800',
    },
    {
        address: '营口市市辖区',
        code: '210801',
    },
    {
        address: '站前区',
        code: '210802',
    },
    {
        address: '西市区',
        code: '210803',
    },
    {
        address: '鲅鱼圈区',
        code: '210804',
    },
    {
        address: '老边区',
        code: '210811',
    },
    {
        address: '盖州市',
        code: '210881',
    },
    {
        address: '大石桥市',
        code: '210882',
    },
    {
        address: '阜新市',
        code: '210900',
    },
    {
        address: '阜新市市辖区',
        code: '210901',
    },
    {
        address: '海州区',
        code: '210902',
    },
    {
        address: '新邱区',
        code: '210903',
    },
    {
        address: '太平区',
        code: '210904',
    },
    {
        address: '清河门区',
        code: '210905',
    },
    {
        address: '细河区',
        code: '210911',
    },
    {
        address: '阜新蒙古族自治县',
        code: '210921',
    },
    {
        address: '彰武县',
        code: '210922',
    },
    {
        address: '辽阳市',
        code: '211000',
    },
    {
        address: '辽阳市市辖区',
        code: '211001',
    },
    {
        address: '白塔区',
        code: '211002',
    },
    {
        address: '文圣区',
        code: '211003',
    },
    {
        address: '宏伟区',
        code: '211004',
    },
    {
        address: '弓长岭区',
        code: '211005',
    },
    {
        address: '太子河区',
        code: '211011',
    },
    {
        address: '辽阳县',
        code: '211021',
    },
    {
        address: '灯塔市',
        code: '211081',
    },
    {
        address: '盘锦市',
        code: '211100',
    },
    {
        address: '盘锦市市辖区',
        code: '211101',
    },
    {
        address: '双台子区',
        code: '211102',
    },
    {
        address: '兴隆台区',
        code: '211103',
    },
    {
        address: '大洼区',
        code: '211104',
    },
    {
        address: '盘山县',
        code: '211122',
    },
    {
        address: '铁岭市',
        code: '211200',
    },
    {
        address: '铁岭市市辖区',
        code: '211201',
    },
    {
        address: '银州区',
        code: '211202',
    },
    {
        address: '清河区',
        code: '211204',
    },
    {
        address: '铁岭县',
        code: '211221',
    },
    {
        address: '西丰县',
        code: '211223',
    },
    {
        address: '昌图县',
        code: '211224',
    },
    {
        address: '调兵山市',
        code: '211281',
    },
    {
        address: '开原市',
        code: '211282',
    },
    {
        address: '朝阳市',
        code: '211300',
    },
    {
        address: '朝阳市市辖区',
        code: '211301',
    },
    {
        address: '双塔区',
        code: '211302',
    },
    {
        address: '龙城区',
        code: '211303',
    },
    {
        address: '朝阳县',
        code: '211321',
    },
    {
        address: '建平县',
        code: '211322',
    },
    {
        address: '喀喇沁左翼蒙古族自治县',
        code: '211324',
    },
    {
        address: '北票市',
        code: '211381',
    },
    {
        address: '凌源市',
        code: '211382',
    },
    {
        address: '葫芦岛市',
        code: '211400',
    },
    {
        address: '葫芦岛市市辖区',
        code: '211401',
    },
    {
        address: '连山区',
        code: '211402',
    },
    {
        address: '龙港区',
        code: '211403',
    },
    {
        address: '南票区',
        code: '211404',
    },
    {
        address: '绥中县',
        code: '211421',
    },
    {
        address: '建昌县',
        code: '211422',
    },
    {
        address: '兴城市',
        code: '211481',
    },
    {
        address: '吉林省',
        code: '220000',
    },
    {
        address: '长春市',
        code: '220100',
    },
    {
        address: '长春市市辖区',
        code: '220101',
    },
    {
        address: '南关区',
        code: '220102',
    },
    {
        address: '宽城区',
        code: '220103',
    },
    {
        address: '朝阳区',
        code: '220104',
    },
    {
        address: '二道区',
        code: '220105',
    },
    {
        address: '绿园区',
        code: '220106',
    },
    {
        address: '双阳区',
        code: '220112',
    },
    {
        address: '九台区',
        code: '220113',
    },
    {
        address: '农安县',
        code: '220122',
    },
    {
        address: '榆树市',
        code: '220182',
    },
    {
        address: '德惠市',
        code: '220183',
    },
    {
        address: '吉林市',
        code: '220200',
    },
    {
        address: '吉林市市辖区',
        code: '220201',
    },
    {
        address: '昌邑区',
        code: '220202',
    },
    {
        address: '龙潭区',
        code: '220203',
    },
    {
        address: '船营区',
        code: '220204',
    },
    {
        address: '丰满区',
        code: '220211',
    },
    {
        address: '永吉县',
        code: '220221',
    },
    {
        address: '蛟河市',
        code: '220281',
    },
    {
        address: '桦甸市',
        code: '220282',
    },
    {
        address: '舒兰市',
        code: '220283',
    },
    {
        address: '磐石市',
        code: '220284',
    },
    {
        address: '四平市',
        code: '220300',
    },
    {
        address: '四平市市辖区',
        code: '220301',
    },
    {
        address: '铁西区',
        code: '220302',
    },
    {
        address: '铁东区',
        code: '220303',
    },
    {
        address: '梨树县',
        code: '220322',
    },
    {
        address: '伊通满族自治县',
        code: '220323',
    },
    {
        address: '公主岭市',
        code: '220184',
    },
    {
        address: '双辽市',
        code: '220382',
    },
    {
        address: '辽源市',
        code: '220400',
    },
    {
        address: '辽源市市辖区',
        code: '220401',
    },
    {
        address: '龙山区',
        code: '220402',
    },
    {
        address: '西安区',
        code: '220403',
    },
    {
        address: '东丰县',
        code: '220421',
    },
    {
        address: '东辽县',
        code: '220422',
    },
    {
        address: '通化市',
        code: '220500',
    },
    {
        address: '通化市市辖区',
        code: '220501',
    },
    {
        address: '东昌区',
        code: '220502',
    },
    {
        address: '二道江区',
        code: '220503',
    },
    {
        address: '通化县',
        code: '220521',
    },
    {
        address: '辉南县',
        code: '220523',
    },
    {
        address: '柳河县',
        code: '220524',
    },
    {
        address: '梅河口市',
        code: '220581',
    },
    {
        address: '集安市',
        code: '220582',
    },
    {
        address: '白山市',
        code: '220600',
    },
    {
        address: '白山市市辖区',
        code: '220601',
    },
    {
        address: '浑江区',
        code: '220602',
    },
    {
        address: '江源区',
        code: '220605',
    },
    {
        address: '抚松县',
        code: '220621',
    },
    {
        address: '靖宇县',
        code: '220622',
    },
    {
        address: '长白朝鲜族自治县',
        code: '220623',
    },
    {
        address: '临江市',
        code: '220681',
    },
    {
        address: '松原市',
        code: '220700',
    },
    {
        address: '松原市市辖区',
        code: '220701',
    },
    {
        address: '宁江区',
        code: '220702',
    },
    {
        address: '前郭尔罗斯蒙古族自治县',
        code: '220721',
    },
    {
        address: '长岭县',
        code: '220722',
    },
    {
        address: '乾安县',
        code: '220723',
    },
    {
        address: '扶余市',
        code: '220781',
    },
    {
        address: '白城市',
        code: '220800',
    },
    {
        address: '白城市市辖区',
        code: '220801',
    },
    {
        address: '洮北区',
        code: '220802',
    },
    {
        address: '镇赉县',
        code: '220821',
    },
    {
        address: '通榆县',
        code: '220822',
    },
    {
        address: '洮南市',
        code: '220881',
    },
    {
        address: '大安市',
        code: '220882',
    },
    {
        address: '延边朝鲜族自治州',
        code: '222400',
    },
    {
        address: '延吉市',
        code: '222401',
    },
    {
        address: '图们市',
        code: '222402',
    },
    {
        address: '敦化市',
        code: '222403',
    },
    {
        address: '珲春市',
        code: '222404',
    },
    {
        address: '龙井市',
        code: '222405',
    },
    {
        address: '和龙市',
        code: '222406',
    },
    {
        address: '汪清县',
        code: '222424',
    },
    {
        address: '安图县',
        code: '222426',
    },
    {
        address: '黑龙江省',
        code: '230000',
    },
    {
        address: '哈尔滨市',
        code: '230100',
    },
    {
        address: '哈尔滨市市辖区',
        code: '230101',
    },
    {
        address: '道里区',
        code: '230102',
    },
    {
        address: '南岗区',
        code: '230103',
    },
    {
        address: '道外区',
        code: '230104',
    },
    {
        address: '平房区',
        code: '230108',
    },
    {
        address: '松北区',
        code: '230109',
    },
    {
        address: '香坊区',
        code: '230110',
    },
    {
        address: '呼兰区',
        code: '230111',
    },
    {
        address: '阿城区',
        code: '230112',
    },
    {
        address: '双城区',
        code: '230113',
    },
    {
        address: '依兰县',
        code: '230123',
    },
    {
        address: '方正县',
        code: '230124',
    },
    {
        address: '宾县',
        code: '230125',
    },
    {
        address: '巴彦县',
        code: '230126',
    },
    {
        address: '木兰县',
        code: '230127',
    },
    {
        address: '通河县',
        code: '230128',
    },
    {
        address: '延寿县',
        code: '230129',
    },
    {
        address: '尚志市',
        code: '230183',
    },
    {
        address: '五常市',
        code: '230184',
    },
    {
        address: '齐齐哈尔市',
        code: '230200',
    },
    {
        address: '齐齐哈尔市市辖区',
        code: '230201',
    },
    {
        address: '龙沙区',
        code: '230202',
    },
    {
        address: '建华区',
        code: '230203',
    },
    {
        address: '铁锋区',
        code: '230204',
    },
    {
        address: '昂昂溪区',
        code: '230205',
    },
    {
        address: '富拉尔基区',
        code: '230206',
    },
    {
        address: '碾子山区',
        code: '230207',
    },
    {
        address: '梅里斯达斡尔族区',
        code: '230208',
    },
    {
        address: '龙江县',
        code: '230221',
    },
    {
        address: '依安县',
        code: '230223',
    },
    {
        address: '泰来县',
        code: '230224',
    },
    {
        address: '甘南县',
        code: '230225',
    },
    {
        address: '富裕县',
        code: '230227',
    },
    {
        address: '克山县',
        code: '230229',
    },
    {
        address: '克东县',
        code: '230230',
    },
    {
        address: '拜泉县',
        code: '230231',
    },
    {
        address: '讷河市',
        code: '230281',
    },
    {
        address: '鸡西市',
        code: '230300',
    },
    {
        address: '鸡西市市辖区',
        code: '230301',
    },
    {
        address: '鸡冠区',
        code: '230302',
    },
    {
        address: '恒山区',
        code: '230303',
    },
    {
        address: '滴道区',
        code: '230304',
    },
    {
        address: '梨树区',
        code: '230305',
    },
    {
        address: '城子河区',
        code: '230306',
    },
    {
        address: '麻山区',
        code: '230307',
    },
    {
        address: '鸡东县',
        code: '230321',
    },
    {
        address: '虎林市',
        code: '230381',
    },
    {
        address: '密山市',
        code: '230382',
    },
    {
        address: '鹤岗市',
        code: '230400',
    },
    {
        address: '鹤岗市市辖区',
        code: '230401',
    },
    {
        address: '向阳区',
        code: '230402',
    },
    {
        address: '工农区',
        code: '230403',
    },
    {
        address: '南山区',
        code: '230404',
    },
    {
        address: '兴安区',
        code: '230405',
    },
    {
        address: '东山区',
        code: '230406',
    },
    {
        address: '兴山区',
        code: '230407',
    },
    {
        address: '萝北县',
        code: '230421',
    },
    {
        address: '绥滨县',
        code: '230422',
    },
    {
        address: '双鸭山市',
        code: '230500',
    },
    {
        address: '双鸭山市市辖区',
        code: '230501',
    },
    {
        address: '尖山区',
        code: '230502',
    },
    {
        address: '岭东区',
        code: '230503',
    },
    {
        address: '四方台区',
        code: '230505',
    },
    {
        address: '宝山区',
        code: '230506',
    },
    {
        address: '集贤县',
        code: '230521',
    },
    {
        address: '友谊县',
        code: '230522',
    },
    {
        address: '宝清县',
        code: '230523',
    },
    {
        address: '饶河县',
        code: '230524',
    },
    {
        address: '大庆市',
        code: '230600',
    },
    {
        address: '大庆市市辖区',
        code: '230601',
    },
    {
        address: '萨尔图区',
        code: '230602',
    },
    {
        address: '龙凤区',
        code: '230603',
    },
    {
        address: '让胡路区',
        code: '230604',
    },
    {
        address: '红岗区',
        code: '230605',
    },
    {
        address: '大同区',
        code: '230606',
    },
    {
        address: '肇州县',
        code: '230621',
    },
    {
        address: '肇源县',
        code: '230622',
    },
    {
        address: '林甸县',
        code: '230623',
    },
    {
        address: '杜尔伯特蒙古族自治县',
        code: '230624',
    },
    {
        address: '伊春市',
        code: '230700',
    },
    {
        address: '伊春市市辖区',
        code: '230701',
    },
    {
        address: '汤旺河区',
        code: '230712',
    },
    {
        address: '伊美区',
        code: '230717',
    },
    {
        address: '乌翠区',
        code: '230718',
    },
    {
        address: '友好区',
        code: '230719',
    },
    {
        address: '嘉荫县',
        code: '230722',
    },
    {
        address: '汤旺县',
        code: '230723',
    },
    {
        address: '丰林县',
        code: '230724',
    },
    {
        address: '大箐山县',
        code: '230725',
    },
    {
        address: '南岔县',
        code: '230726',
    },
    {
        address: '金林区',
        code: '230751',
    },
    {
        address: '铁力市',
        code: '230781',
    },
    {
        address: '佳木斯市',
        code: '230800',
    },
    {
        address: '佳木斯市市辖区',
        code: '230801',
    },
    {
        address: '向阳区',
        code: '230803',
    },
    {
        address: '前进区',
        code: '230804',
    },
    {
        address: '东风区',
        code: '230805',
    },
    {
        address: '郊区',
        code: '230811',
    },
    {
        address: '桦南县',
        code: '230822',
    },
    {
        address: '桦川县',
        code: '230826',
    },
    {
        address: '汤原县',
        code: '230828',
    },
    {
        address: '同江市',
        code: '230881',
    },
    {
        address: '富锦市',
        code: '230882',
    },
    {
        address: '抚远市',
        code: '230883',
    },
    {
        address: '七台河市',
        code: '230900',
    },
    {
        address: '七台河市市辖区',
        code: '230901',
    },
    {
        address: '新兴区',
        code: '230902',
    },
    {
        address: '桃山区',
        code: '230903',
    },
    {
        address: '茄子河区',
        code: '230904',
    },
    {
        address: '勃利县',
        code: '230921',
    },
    {
        address: '牡丹江市',
        code: '231000',
    },
    {
        address: '牡丹江市市辖区',
        code: '231001',
    },
    {
        address: '东安区',
        code: '231002',
    },
    {
        address: '阳明区',
        code: '231003',
    },
    {
        address: '爱民区',
        code: '231004',
    },
    {
        address: '西安区',
        code: '231005',
    },
    {
        address: '林口县',
        code: '231025',
    },
    {
        address: '绥芬河市',
        code: '231081',
    },
    {
        address: '海林市',
        code: '231083',
    },
    {
        address: '宁安市',
        code: '231084',
    },
    {
        address: '穆棱市',
        code: '231085',
    },
    {
        address: '东宁市',
        code: '231086',
    },
    {
        address: '黑河市',
        code: '231100',
    },
    {
        address: '黑河市市辖区',
        code: '231101',
    },
    {
        address: '爱辉区',
        code: '231102',
    },
    {
        address: '嫩江市',
        code: '231183',
    },
    {
        address: '逊克县',
        code: '231123',
    },
    {
        address: '孙吴县',
        code: '231124',
    },
    {
        address: '北安市',
        code: '231181',
    },
    {
        address: '五大连池市',
        code: '231182',
    },
    {
        address: '绥化市',
        code: '231200',
    },
    {
        address: '绥化市市辖区',
        code: '231201',
    },
    {
        address: '北林区',
        code: '231202',
    },
    {
        address: '望奎县',
        code: '231221',
    },
    {
        address: '兰西县',
        code: '231222',
    },
    {
        address: '青冈县',
        code: '231223',
    },
    {
        address: '庆安县',
        code: '231224',
    },
    {
        address: '明水县',
        code: '231225',
    },
    {
        address: '绥棱县',
        code: '231226',
    },
    {
        address: '安达市',
        code: '231281',
    },
    {
        address: '肇东市',
        code: '231282',
    },
    {
        address: '海伦市',
        code: '231283',
    },
    {
        address: '大兴安岭地区',
        code: '232700',
    },
    {
        address: '加格达奇区',
        code: '232718',
    },
    {
        address: '呼玛县',
        code: '232721',
    },
    {
        address: '塔河县',
        code: '232722',
    },
    {
        address: '漠河市',
        code: '232701',
    },
    {
        address: '上海市',
        code: '310000',
    },
    {
        address: '上海市市辖区',
        code: '310100',
    },
    {
        address: '黄浦区',
        code: '310101',
    },
    {
        address: '徐汇区',
        code: '310104',
    },
    {
        address: '长宁区',
        code: '310105',
    },
    {
        address: '静安区',
        code: '310106',
    },
    {
        address: '普陀区',
        code: '310107',
    },
    {
        address: '虹口区',
        code: '310109',
    },
    {
        address: '杨浦区',
        code: '310110',
    },
    {
        address: '闵行区',
        code: '310112',
    },
    {
        address: '宝山区',
        code: '310113',
    },
    {
        address: '嘉定区',
        code: '310114',
    },
    {
        address: '浦东新区',
        code: '310115',
    },
    {
        address: '金山区',
        code: '310116',
    },
    {
        address: '松江区',
        code: '310117',
    },
    {
        address: '青浦区',
        code: '310118',
    },
    {
        address: '奉贤区',
        code: '310120',
    },
    {
        address: '崇明区',
        code: '310151',
    },
    {
        address: '江苏省',
        code: '320000',
    },
    {
        address: '南京市',
        code: '320100',
    },
    {
        address: '南京市市辖区',
        code: '320101',
    },
    {
        address: '玄武区',
        code: '320102',
    },
    {
        address: '秦淮区',
        code: '320104',
    },
    {
        address: '建邺区',
        code: '320105',
    },
    {
        address: '鼓楼区',
        code: '320106',
    },
    {
        address: '浦口区',
        code: '320111',
    },
    {
        address: '栖霞区',
        code: '320113',
    },
    {
        address: '雨花台区',
        code: '320114',
    },
    {
        address: '江宁区',
        code: '320115',
    },
    {
        address: '六合区',
        code: '320116',
    },
    {
        address: '溧水区',
        code: '320117',
    },
    {
        address: '高淳区',
        code: '320118',
    },
    {
        address: '无锡市',
        code: '320200',
    },
    {
        address: '无锡市市辖区',
        code: '320201',
    },
    {
        address: '锡山区',
        code: '320205',
    },
    {
        address: '惠山区',
        code: '320206',
    },
    {
        address: '滨湖区',
        code: '320211',
    },
    {
        address: '梁溪区',
        code: '320213',
    },
    {
        address: '新吴区',
        code: '320214',
    },
    {
        address: '江阴市',
        code: '320281',
    },
    {
        address: '宜兴市',
        code: '320282',
    },
    {
        address: '徐州市',
        code: '320300',
    },
    {
        address: '徐州市市辖区',
        code: '320301',
    },
    {
        address: '鼓楼区',
        code: '320302',
    },
    {
        address: '云龙区',
        code: '320303',
    },
    {
        address: '贾汪区',
        code: '320305',
    },
    {
        address: '泉山区',
        code: '320311',
    },
    {
        address: '铜山区',
        code: '320312',
    },
    {
        address: '丰县',
        code: '320321',
    },
    {
        address: '沛县',
        code: '320322',
    },
    {
        address: '睢宁县',
        code: '320324',
    },
    {
        address: '新沂市',
        code: '320381',
    },
    {
        address: '邳州市',
        code: '320382',
    },
    {
        address: '常州市',
        code: '320400',
    },
    {
        address: '常州市市辖区',
        code: '320401',
    },
    {
        address: '天宁区',
        code: '320402',
    },
    {
        address: '钟楼区',
        code: '320404',
    },
    {
        address: '新北区',
        code: '320411',
    },
    {
        address: '武进区',
        code: '320412',
    },
    {
        address: '金坛区',
        code: '320413',
    },
    {
        address: '溧阳市',
        code: '320481',
    },
    {
        address: '苏州市',
        code: '320500',
    },
    {
        address: '苏州市市辖区',
        code: '320501',
    },
    {
        address: '虎丘区',
        code: '320505',
    },
    {
        address: '吴中区',
        code: '320506',
    },
    {
        address: '相城区',
        code: '320507',
    },
    {
        address: '姑苏区',
        code: '320508',
    },
    {
        address: '吴江区',
        code: '320509',
    },
    {
        address: '常熟市',
        code: '320581',
    },
    {
        address: '张家港市',
        code: '320582',
    },
    {
        address: '昆山市',
        code: '320583',
    },
    {
        address: '太仓市',
        code: '320585',
    },
    {
        address: '南通市',
        code: '320600',
    },
    {
        address: '南通市市辖区',
        code: '320601',
    },
    {
        address: '崇川区',
        code: '320602',
    },
    {
        address: '通州区',
        code: '320612',
    },
    {
        address: '海安市',
        code: '320685',
    },
    {
        address: '如东县',
        code: '320623',
    },
    {
        address: '启东市',
        code: '320681',
    },
    {
        address: '如皋市',
        code: '320682',
    },
    {
        address: '海门区',
        code: '320684',
    },
    {
        address: '连云港市',
        code: '320700',
    },
    {
        address: '连云港市市辖区',
        code: '320701',
    },
    {
        address: '连云区',
        code: '320703',
    },
    {
        address: '海州区',
        code: '320706',
    },
    {
        address: '赣榆区',
        code: '320707',
    },
    {
        address: '东海县',
        code: '320722',
    },
    {
        address: '灌云县',
        code: '320723',
    },
    {
        address: '灌南县',
        code: '320724',
    },
    {
        address: '淮安市',
        code: '320800',
    },
    {
        address: '淮安市市辖区',
        code: '320801',
    },
    {
        address: '淮安区',
        code: '320803',
    },
    {
        address: '淮阴区',
        code: '320804',
    },
    {
        address: '清江浦区',
        code: '320812',
    },
    {
        address: '洪泽区',
        code: '320813',
    },
    {
        address: '涟水县',
        code: '320826',
    },
    {
        address: '盱眙县',
        code: '320830',
    },
    {
        address: '金湖县',
        code: '320831',
    },
    {
        address: '盐城市',
        code: '320900',
    },
    {
        address: '盐城市市辖区',
        code: '320901',
    },
    {
        address: '亭湖区',
        code: '320902',
    },
    {
        address: '盐都区',
        code: '320903',
    },
    {
        address: '大丰区',
        code: '320904',
    },
    {
        address: '响水县',
        code: '320921',
    },
    {
        address: '滨海县',
        code: '320922',
    },
    {
        address: '阜宁县',
        code: '320923',
    },
    {
        address: '射阳县',
        code: '320924',
    },
    {
        address: '建湖县',
        code: '320925',
    },
    {
        address: '东台市',
        code: '320981',
    },
    {
        address: '扬州市',
        code: '321000',
    },
    {
        address: '扬州市市辖区',
        code: '321001',
    },
    {
        address: '广陵区',
        code: '321002',
    },
    {
        address: '邗江区',
        code: '321003',
    },
    {
        address: '江都区',
        code: '321012',
    },
    {
        address: '宝应县',
        code: '321023',
    },
    {
        address: '仪征市',
        code: '321081',
    },
    {
        address: '高邮市',
        code: '321084',
    },
    {
        address: '镇江市',
        code: '321100',
    },
    {
        address: '镇江市市辖区',
        code: '321101',
    },
    {
        address: '京口区',
        code: '321102',
    },
    {
        address: '润州区',
        code: '321111',
    },
    {
        address: '丹徒区',
        code: '321112',
    },
    {
        address: '丹阳市',
        code: '321181',
    },
    {
        address: '扬中市',
        code: '321182',
    },
    {
        address: '句容市',
        code: '321183',
    },
    {
        address: '泰州市',
        code: '321200',
    },
    {
        address: '泰州市市辖区',
        code: '321201',
    },
    {
        address: '海陵区',
        code: '321202',
    },
    {
        address: '高港区',
        code: '321203',
    },
    {
        address: '姜堰区',
        code: '321204',
    },
    {
        address: '兴化市',
        code: '321281',
    },
    {
        address: '靖江市',
        code: '321282',
    },
    {
        address: '泰兴市',
        code: '321283',
    },
    {
        address: '宿迁市',
        code: '321300',
    },
    {
        address: '宿迁市市辖区',
        code: '321301',
    },
    {
        address: '宿城区',
        code: '321302',
    },
    {
        address: '宿豫区',
        code: '321311',
    },
    {
        address: '沭阳县',
        code: '321322',
    },
    {
        address: '泗阳县',
        code: '321323',
    },
    {
        address: '泗洪县',
        code: '321324',
    },
    {
        address: '浙江省',
        code: '330000',
    },
    {
        address: '杭州市',
        code: '330100',
    },
    {
        address: '杭州市市辖区',
        code: '330101',
    },
    {
        address: '上城区',
        code: '330102',
    },
    {
        address: '下城区',
        code: '330103',
    },
    {
        address: '江干区',
        code: '330104',
    },
    {
        address: '拱墅区',
        code: '330105',
    },
    {
        address: '西湖区',
        code: '330106',
    },
    {
        address: '滨江区',
        code: '330108',
    },
    {
        address: '萧山区',
        code: '330109',
    },
    {
        address: '余杭区',
        code: '330110',
    },
    {
        address: '富阳区',
        code: '330111',
    },
    {
        address: '临安区',
        code: '330112',
    },
    {
        address: '桐庐县',
        code: '330122',
    },
    {
        address: '淳安县',
        code: '330127',
    },
    {
        address: '建德市',
        code: '330182',
    },
    {
        address: '宁波市',
        code: '330200',
    },
    {
        address: '宁波市市辖区',
        code: '330201',
    },
    {
        address: '海曙区',
        code: '330203',
    },
    {
        address: '江北区',
        code: '330205',
    },
    {
        address: '北仑区',
        code: '330206',
    },
    {
        address: '镇海区',
        code: '330211',
    },
    {
        address: '鄞州区',
        code: '330212',
    },
    {
        address: '奉化区',
        code: '330213',
    },
    {
        address: '象山县',
        code: '330225',
    },
    {
        address: '宁海县',
        code: '330226',
    },
    {
        address: '余姚市',
        code: '330281',
    },
    {
        address: '慈溪市',
        code: '330282',
    },
    {
        address: '温州市',
        code: '330300',
    },
    {
        address: '温州市市辖区',
        code: '330301',
    },
    {
        address: '鹿城区',
        code: '330302',
    },
    {
        address: '龙湾区',
        code: '330303',
    },
    {
        address: '瓯海区',
        code: '330304',
    },
    {
        address: '洞头区',
        code: '330305',
    },
    {
        address: '永嘉县',
        code: '330324',
    },
    {
        address: '平阳县',
        code: '330326',
    },
    {
        address: '苍南县',
        code: '330327',
    },
    {
        address: '文成县',
        code: '330328',
    },
    {
        address: '泰顺县',
        code: '330329',
    },
    {
        address: '瑞安市',
        code: '330381',
    },
    {
        address: '乐清市',
        code: '330382',
    },
    {
        address: '龙港市',
        code: '330383',
    },
    {
        address: '嘉兴市',
        code: '330400',
    },
    {
        address: '嘉兴市市辖区',
        code: '330401',
    },
    {
        address: '南湖区',
        code: '330402',
    },
    {
        address: '秀洲区',
        code: '330411',
    },
    {
        address: '嘉善县',
        code: '330421',
    },
    {
        address: '海盐县',
        code: '330424',
    },
    {
        address: '海宁市',
        code: '330481',
    },
    {
        address: '平湖市',
        code: '330482',
    },
    {
        address: '桐乡市',
        code: '330483',
    },
    {
        address: '湖州市',
        code: '330500',
    },
    {
        address: '湖州市市辖区',
        code: '330501',
    },
    {
        address: '吴兴区',
        code: '330502',
    },
    {
        address: '南浔区',
        code: '330503',
    },
    {
        address: '德清县',
        code: '330521',
    },
    {
        address: '长兴县',
        code: '330522',
    },
    {
        address: '安吉县',
        code: '330523',
    },
    {
        address: '绍兴市',
        code: '330600',
    },
    {
        address: '绍兴市市辖区',
        code: '330601',
    },
    {
        address: '越城区',
        code: '330602',
    },
    {
        address: '柯桥区',
        code: '330603',
    },
    {
        address: '上虞区',
        code: '330604',
    },
    {
        address: '新昌县',
        code: '330624',
    },
    {
        address: '诸暨市',
        code: '330681',
    },
    {
        address: '嵊州市',
        code: '330683',
    },
    {
        address: '金华市',
        code: '330700',
    },
    {
        address: '金华市市辖区',
        code: '330701',
    },
    {
        address: '婺城区',
        code: '330702',
    },
    {
        address: '金东区',
        code: '330703',
    },
    {
        address: '武义县',
        code: '330723',
    },
    {
        address: '浦江县',
        code: '330726',
    },
    {
        address: '磐安县',
        code: '330727',
    },
    {
        address: '兰溪市',
        code: '330781',
    },
    {
        address: '义乌市',
        code: '330782',
    },
    {
        address: '东阳市',
        code: '330783',
    },
    {
        address: '永康市',
        code: '330784',
    },
    {
        address: '衢州市',
        code: '330800',
    },
    {
        address: '衢州市市辖区',
        code: '330801',
    },
    {
        address: '柯城区',
        code: '330802',
    },
    {
        address: '衢江区',
        code: '330803',
    },
    {
        address: '常山县',
        code: '330822',
    },
    {
        address: '开化县',
        code: '330824',
    },
    {
        address: '龙游县',
        code: '330825',
    },
    {
        address: '江山市',
        code: '330881',
    },
    {
        address: '舟山市',
        code: '330900',
    },
    {
        address: '舟山市市辖区',
        code: '330901',
    },
    {
        address: '定海区',
        code: '330902',
    },
    {
        address: '普陀区',
        code: '330903',
    },
    {
        address: '岱山县',
        code: '330921',
    },
    {
        address: '嵊泗县',
        code: '330922',
    },
    {
        address: '台州市',
        code: '331000',
    },
    {
        address: '台州市市辖区',
        code: '331001',
    },
    {
        address: '椒江区',
        code: '331002',
    },
    {
        address: '黄岩区',
        code: '331003',
    },
    {
        address: '路桥区',
        code: '331004',
    },
    {
        address: '三门县',
        code: '331022',
    },
    {
        address: '天台县',
        code: '331023',
    },
    {
        address: '仙居县',
        code: '331024',
    },
    {
        address: '温岭市',
        code: '331081',
    },
    {
        address: '临海市',
        code: '331082',
    },
    {
        address: '玉环市',
        code: '331083',
    },
    {
        address: '丽水市',
        code: '331100',
    },
    {
        address: '丽水市市辖区',
        code: '331101',
    },
    {
        address: '莲都区',
        code: '331102',
    },
    {
        address: '青田县',
        code: '331121',
    },
    {
        address: '缙云县',
        code: '331122',
    },
    {
        address: '遂昌县',
        code: '331123',
    },
    {
        address: '松阳县',
        code: '331124',
    },
    {
        address: '云和县',
        code: '331125',
    },
    {
        address: '庆元县',
        code: '331126',
    },
    {
        address: '景宁畲族自治县',
        code: '331127',
    },
    {
        address: '龙泉市',
        code: '331181',
    },
    {
        address: '安徽省',
        code: '340000',
    },
    {
        address: '合肥市',
        code: '340100',
    },
    {
        address: '合肥市市辖区',
        code: '340101',
    },
    {
        address: '瑶海区',
        code: '340102',
    },
    {
        address: '庐阳区',
        code: '340103',
    },
    {
        address: '蜀山区',
        code: '340104',
    },
    {
        address: '包河区',
        code: '340111',
    },
    {
        address: '长丰县',
        code: '340121',
    },
    {
        address: '肥东县',
        code: '340122',
    },
    {
        address: '肥西县',
        code: '340123',
    },
    {
        address: '庐江县',
        code: '340124',
    },
    {
        address: '巢湖市',
        code: '340181',
    },
    {
        address: '芜湖市',
        code: '340200',
    },
    {
        address: '芜湖市市辖区',
        code: '340201',
    },
    {
        address: '镜湖区',
        code: '340202',
    },
    {
        address: '弋江区',
        code: '340203',
    },
    {
        address: '鸠江区',
        code: '340207',
    },
    {
        address: '湾沚区',
        code: '340221',
    },
    {
        address: '繁昌区',
        code: '340222',
    },
    {
        address: '南陵县',
        code: '340223',
    },
    {
        address: '无为市',
        code: '340281',
    },
    {
        address: '蚌埠市',
        code: '340300',
    },
    {
        address: '蚌埠市市辖区',
        code: '340301',
    },
    {
        address: '龙子湖区',
        code: '340302',
    },
    {
        address: '蚌山区',
        code: '340303',
    },
    {
        address: '禹会区',
        code: '340304',
    },
    {
        address: '淮上区',
        code: '340311',
    },
    {
        address: '怀远县',
        code: '340321',
    },
    {
        address: '五河县',
        code: '340322',
    },
    {
        address: '固镇县',
        code: '340323',
    },
    {
        address: '淮南市',
        code: '340400',
    },
    {
        address: '淮南市市辖区',
        code: '340401',
    },
    {
        address: '大通区',
        code: '340402',
    },
    {
        address: '田家庵区',
        code: '340403',
    },
    {
        address: '谢家集区',
        code: '340404',
    },
    {
        address: '八公山区',
        code: '340405',
    },
    {
        address: '潘集区',
        code: '340406',
    },
    {
        address: '凤台县',
        code: '340421',
    },
    {
        address: '寿县',
        code: '340422',
    },
    {
        address: '马鞍山市',
        code: '340500',
    },
    {
        address: '马鞍山市市辖区',
        code: '340501',
    },
    {
        address: '花山区',
        code: '340503',
    },
    {
        address: '雨山区',
        code: '340504',
    },
    {
        address: '博望区',
        code: '340506',
    },
    {
        address: '当涂县',
        code: '340521',
    },
    {
        address: '含山县',
        code: '340522',
    },
    {
        address: '和县',
        code: '340523',
    },
    {
        address: '淮北市',
        code: '340600',
    },
    {
        address: '淮北市市辖区',
        code: '340601',
    },
    {
        address: '杜集区',
        code: '340602',
    },
    {
        address: '相山区',
        code: '340603',
    },
    {
        address: '烈山区',
        code: '340604',
    },
    {
        address: '濉溪县',
        code: '340621',
    },
    {
        address: '铜陵市',
        code: '340700',
    },
    {
        address: '铜陵市市辖区',
        code: '340701',
    },
    {
        address: '铜官区',
        code: '340705',
    },
    {
        address: '义安区',
        code: '340706',
    },
    {
        address: '郊区',
        code: '340711',
    },
    {
        address: '枞阳县',
        code: '340722',
    },
    {
        address: '安庆市',
        code: '340800',
    },
    {
        address: '安庆市市辖区',
        code: '340801',
    },
    {
        address: '迎江区',
        code: '340802',
    },
    {
        address: '大观区',
        code: '340803',
    },
    {
        address: '宜秀区',
        code: '340811',
    },
    {
        address: '怀宁县',
        code: '340822',
    },
    {
        address: '潜山市',
        code: '340882',
    },
    {
        address: '太湖县',
        code: '340825',
    },
    {
        address: '宿松县',
        code: '340826',
    },
    {
        address: '望江县',
        code: '340827',
    },
    {
        address: '岳西县',
        code: '340828',
    },
    {
        address: '桐城市',
        code: '340881',
    },
    {
        address: '黄山市',
        code: '341000',
    },
    {
        address: '黄山市市辖区',
        code: '341001',
    },
    {
        address: '屯溪区',
        code: '341002',
    },
    {
        address: '黄山区',
        code: '341003',
    },
    {
        address: '徽州区',
        code: '341004',
    },
    {
        address: '歙县',
        code: '341021',
    },
    {
        address: '休宁县',
        code: '341022',
    },
    {
        address: '黟县',
        code: '341023',
    },
    {
        address: '祁门县',
        code: '341024',
    },
    {
        address: '滁州市',
        code: '341100',
    },
    {
        address: '滁州市市辖区',
        code: '341101',
    },
    {
        address: '琅琊区',
        code: '341102',
    },
    {
        address: '南谯区',
        code: '341103',
    },
    {
        address: '来安县',
        code: '341122',
    },
    {
        address: '全椒县',
        code: '341124',
    },
    {
        address: '定远县',
        code: '341125',
    },
    {
        address: '凤阳县',
        code: '341126',
    },
    {
        address: '天长市',
        code: '341181',
    },
    {
        address: '明光市',
        code: '341182',
    },
    {
        address: '阜阳市',
        code: '341200',
    },
    {
        address: '阜阳市市辖区',
        code: '341201',
    },
    {
        address: '颍州区',
        code: '341202',
    },
    {
        address: '颍东区',
        code: '341203',
    },
    {
        address: '颍泉区',
        code: '341204',
    },
    {
        address: '临泉县',
        code: '341221',
    },
    {
        address: '太和县',
        code: '341222',
    },
    {
        address: '阜南县',
        code: '341225',
    },
    {
        address: '颍上县',
        code: '341226',
    },
    {
        address: '界首市',
        code: '341282',
    },
    {
        address: '宿州市',
        code: '341300',
    },
    {
        address: '宿州市市辖区',
        code: '341301',
    },
    {
        address: '埇桥区',
        code: '341302',
    },
    {
        address: '砀山县',
        code: '341321',
    },
    {
        address: '萧县',
        code: '341322',
    },
    {
        address: '灵璧县',
        code: '341323',
    },
    {
        address: '泗县',
        code: '341324',
    },
    {
        address: '六安市',
        code: '341500',
    },
    {
        address: '六安市市辖区',
        code: '341501',
    },
    {
        address: '金安区',
        code: '341502',
    },
    {
        address: '裕安区',
        code: '341503',
    },
    {
        address: '叶集区',
        code: '341504',
    },
    {
        address: '霍邱县',
        code: '341522',
    },
    {
        address: '舒城县',
        code: '341523',
    },
    {
        address: '金寨县',
        code: '341524',
    },
    {
        address: '霍山县',
        code: '341525',
    },
    {
        address: '亳州市',
        code: '341600',
    },
    {
        address: '亳州市市辖区',
        code: '341601',
    },
    {
        address: '谯城区',
        code: '341602',
    },
    {
        address: '涡阳县',
        code: '341621',
    },
    {
        address: '蒙城县',
        code: '341622',
    },
    {
        address: '利辛县',
        code: '341623',
    },
    {
        address: '池州市',
        code: '341700',
    },
    {
        address: '池州市市辖区',
        code: '341701',
    },
    {
        address: '贵池区',
        code: '341702',
    },
    {
        address: '东至县',
        code: '341721',
    },
    {
        address: '石台县',
        code: '341722',
    },
    {
        address: '青阳县',
        code: '341723',
    },
    {
        address: '宣城市',
        code: '341800',
    },
    {
        address: '宣城市市辖区',
        code: '341801',
    },
    {
        address: '宣州区',
        code: '341802',
    },
    {
        address: '郎溪县',
        code: '341821',
    },
    {
        address: '广德市',
        code: '341882',
    },
    {
        address: '泾县',
        code: '341823',
    },
    {
        address: '绩溪县',
        code: '341824',
    },
    {
        address: '旌德县',
        code: '341825',
    },
    {
        address: '宁国市',
        code: '341881',
    },
    {
        address: '福建省',
        code: '350000',
    },
    {
        address: '福州市',
        code: '350100',
    },
    {
        address: '福州市市辖区',
        code: '350101',
    },
    {
        address: '鼓楼区',
        code: '350102',
    },
    {
        address: '台江区',
        code: '350103',
    },
    {
        address: '仓山区',
        code: '350104',
    },
    {
        address: '马尾区',
        code: '350105',
    },
    {
        address: '晋安区',
        code: '350111',
    },
    {
        address: '长乐区',
        code: '350112',
    },
    {
        address: '闽侯县',
        code: '350121',
    },
    {
        address: '连江县',
        code: '350122',
    },
    {
        address: '罗源县',
        code: '350123',
    },
    {
        address: '闽清县',
        code: '350124',
    },
    {
        address: '永泰县',
        code: '350125',
    },
    {
        address: '平潭县',
        code: '350128',
    },
    {
        address: '福清市',
        code: '350181',
    },
    {
        address: '厦门市',
        code: '350200',
    },
    {
        address: '厦门市市辖区',
        code: '350201',
    },
    {
        address: '思明区',
        code: '350203',
    },
    {
        address: '海沧区',
        code: '350205',
    },
    {
        address: '湖里区',
        code: '350206',
    },
    {
        address: '集美区',
        code: '350211',
    },
    {
        address: '同安区',
        code: '350212',
    },
    {
        address: '翔安区',
        code: '350213',
    },
    {
        address: '莆田市',
        code: '350300',
    },
    {
        address: '莆田市市辖区',
        code: '350301',
    },
    {
        address: '城厢区',
        code: '350302',
    },
    {
        address: '涵江区',
        code: '350303',
    },
    {
        address: '荔城区',
        code: '350304',
    },
    {
        address: '秀屿区',
        code: '350305',
    },
    {
        address: '仙游县',
        code: '350322',
    },
    {
        address: '三明市',
        code: '350400',
    },
    {
        address: '三明市市辖区',
        code: '350401',
    },
    {
        address: '梅列区',
        code: '350402',
    },
    {
        address: '三元区',
        code: '350403',
    },
    {
        address: '明溪县',
        code: '350421',
    },
    {
        address: '清流县',
        code: '350423',
    },
    {
        address: '宁化县',
        code: '350424',
    },
    {
        address: '大田县',
        code: '350425',
    },
    {
        address: '尤溪县',
        code: '350426',
    },
    {
        address: '沙县',
        code: '350427',
    },
    {
        address: '将乐县',
        code: '350428',
    },
    {
        address: '泰宁县',
        code: '350429',
    },
    {
        address: '建宁县',
        code: '350430',
    },
    {
        address: '永安市',
        code: '350481',
    },
    {
        address: '泉州市',
        code: '350500',
    },
    {
        address: '泉州市市辖区',
        code: '350501',
    },
    {
        address: '鲤城区',
        code: '350502',
    },
    {
        address: '丰泽区',
        code: '350503',
    },
    {
        address: '洛江区',
        code: '350504',
    },
    {
        address: '泉港区',
        code: '350505',
    },
    {
        address: '惠安县',
        code: '350521',
    },
    {
        address: '安溪县',
        code: '350524',
    },
    {
        address: '永春县',
        code: '350525',
    },
    {
        address: '德化县',
        code: '350526',
    },
    {
        address: '金门县',
        code: '350527',
    },
    {
        address: '石狮市',
        code: '350581',
    },
    {
        address: '晋江市',
        code: '350582',
    },
    {
        address: '南安市',
        code: '350583',
    },
    {
        address: '漳州市',
        code: '350600',
    },
    {
        address: '漳州市市辖区',
        code: '350601',
    },
    {
        address: '芗城区',
        code: '350602',
    },
    {
        address: '龙文区',
        code: '350603',
    },
    {
        address: '云霄县',
        code: '350622',
    },
    {
        address: '漳浦县',
        code: '350623',
    },
    {
        address: '诏安县',
        code: '350624',
    },
    {
        address: '长泰县',
        code: '350625',
    },
    {
        address: '东山县',
        code: '350626',
    },
    {
        address: '南靖县',
        code: '350627',
    },
    {
        address: '平和县',
        code: '350628',
    },
    {
        address: '华安县',
        code: '350629',
    },
    {
        address: '龙海市',
        code: '350681',
    },
    {
        address: '南平市',
        code: '350700',
    },
    {
        address: '南平市市辖区',
        code: '350701',
    },
    {
        address: '延平区',
        code: '350702',
    },
    {
        address: '建阳区',
        code: '350703',
    },
    {
        address: '顺昌县',
        code: '350721',
    },
    {
        address: '浦城县',
        code: '350722',
    },
    {
        address: '光泽县',
        code: '350723',
    },
    {
        address: '松溪县',
        code: '350724',
    },
    {
        address: '政和县',
        code: '350725',
    },
    {
        address: '邵武市',
        code: '350781',
    },
    {
        address: '武夷山市',
        code: '350782',
    },
    {
        address: '建瓯市',
        code: '350783',
    },
    {
        address: '龙岩市',
        code: '350800',
    },
    {
        address: '龙岩市市辖区',
        code: '350801',
    },
    {
        address: '新罗区',
        code: '350802',
    },
    {
        address: '永定区',
        code: '350803',
    },
    {
        address: '长汀县',
        code: '350821',
    },
    {
        address: '上杭县',
        code: '350823',
    },
    {
        address: '武平县',
        code: '350824',
    },
    {
        address: '连城县',
        code: '350825',
    },
    {
        address: '漳平市',
        code: '350881',
    },
    {
        address: '宁德市',
        code: '350900',
    },
    {
        address: '宁德市市辖区',
        code: '350901',
    },
    {
        address: '蕉城区',
        code: '350902',
    },
    {
        address: '霞浦县',
        code: '350921',
    },
    {
        address: '古田县',
        code: '350922',
    },
    {
        address: '屏南县',
        code: '350923',
    },
    {
        address: '寿宁县',
        code: '350924',
    },
    {
        address: '周宁县',
        code: '350925',
    },
    {
        address: '柘荣县',
        code: '350926',
    },
    {
        address: '福安市',
        code: '350981',
    },
    {
        address: '福鼎市',
        code: '350982',
    },
    {
        address: '江西省',
        code: '360000',
    },
    {
        address: '南昌市',
        code: '360100',
    },
    {
        address: '南昌市市辖区',
        code: '360101',
    },
    {
        address: '东湖区',
        code: '360102',
    },
    {
        address: '西湖区',
        code: '360103',
    },
    {
        address: '青云谱区',
        code: '360104',
    },
    {
        address: '青山湖区',
        code: '360111',
    },
    {
        address: '红谷滩区',
        code: '360113',
    },
    {
        address: '新建区',
        code: '360112',
    },
    {
        address: '南昌县',
        code: '360121',
    },
    {
        address: '安义县',
        code: '360123',
    },
    {
        address: '进贤县',
        code: '360124',
    },
    {
        address: '景德镇市',
        code: '360200',
    },
    {
        address: '景德镇市市辖区',
        code: '360201',
    },
    {
        address: '昌江区',
        code: '360202',
    },
    {
        address: '珠山区',
        code: '360203',
    },
    {
        address: '浮梁县',
        code: '360222',
    },
    {
        address: '乐平市',
        code: '360281',
    },
    {
        address: '萍乡市',
        code: '360300',
    },
    {
        address: '萍乡市市辖区',
        code: '360301',
    },
    {
        address: '安源区',
        code: '360302',
    },
    {
        address: '湘东区',
        code: '360313',
    },
    {
        address: '莲花县',
        code: '360321',
    },
    {
        address: '上栗县',
        code: '360322',
    },
    {
        address: '芦溪县',
        code: '360323',
    },
    {
        address: '九江市',
        code: '360400',
    },
    {
        address: '九江市市辖区',
        code: '360401',
    },
    {
        address: '濂溪区',
        code: '360402',
    },
    {
        address: '浔阳区',
        code: '360403',
    },
    {
        address: '柴桑区',
        code: '360404',
    },
    {
        address: '武宁县',
        code: '360423',
    },
    {
        address: '修水县',
        code: '360424',
    },
    {
        address: '永修县',
        code: '360425',
    },
    {
        address: '德安县',
        code: '360426',
    },
    {
        address: '都昌县',
        code: '360428',
    },
    {
        address: '湖口县',
        code: '360429',
    },
    {
        address: '彭泽县',
        code: '360430',
    },
    {
        address: '瑞昌市',
        code: '360481',
    },
    {
        address: '共青城市',
        code: '360482',
    },
    {
        address: '庐山市',
        code: '360483',
    },
    {
        address: '新余市',
        code: '360500',
    },
    {
        address: '新余市市辖区',
        code: '360501',
    },
    {
        address: '渝水区',
        code: '360502',
    },
    {
        address: '分宜县',
        code: '360521',
    },
    {
        address: '鹰潭市',
        code: '360600',
    },
    {
        address: '鹰潭市市辖区',
        code: '360601',
    },
    {
        address: '月湖区',
        code: '360602',
    },
    {
        address: '余江区',
        code: '360603',
    },
    {
        address: '贵溪市',
        code: '360681',
    },
    {
        address: '赣州市',
        code: '360700',
    },
    {
        address: '赣州市市辖区',
        code: '360701',
    },
    {
        address: '章贡区',
        code: '360702',
    },
    {
        address: '南康区',
        code: '360703',
    },
    {
        address: '赣县区',
        code: '360704',
    },
    {
        address: '信丰县',
        code: '360722',
    },
    {
        address: '大余县',
        code: '360723',
    },
    {
        address: '上犹县',
        code: '360724',
    },
    {
        address: '崇义县',
        code: '360725',
    },
    {
        address: '安远县',
        code: '360726',
    },
    {
        address: '龙南市',
        code: '360783',
    },
    {
        address: '定南县',
        code: '360728',
    },
    {
        address: '全南县',
        code: '360729',
    },
    {
        address: '宁都县',
        code: '360730',
    },
    {
        address: '于都县',
        code: '360731',
    },
    {
        address: '兴国县',
        code: '360732',
    },
    {
        address: '会昌县',
        code: '360733',
    },
    {
        address: '寻乌县',
        code: '360734',
    },
    {
        address: '石城县',
        code: '360735',
    },
    {
        address: '瑞金市',
        code: '360781',
    },
    {
        address: '吉安市',
        code: '360800',
    },
    {
        address: '吉安市市辖区',
        code: '360801',
    },
    {
        address: '吉州区',
        code: '360802',
    },
    {
        address: '青原区',
        code: '360803',
    },
    {
        address: '吉安县',
        code: '360821',
    },
    {
        address: '吉水县',
        code: '360822',
    },
    {
        address: '峡江县',
        code: '360823',
    },
    {
        address: '新干县',
        code: '360824',
    },
    {
        address: '永丰县',
        code: '360825',
    },
    {
        address: '泰和县',
        code: '360826',
    },
    {
        address: '遂川县',
        code: '360827',
    },
    {
        address: '万安县',
        code: '360828',
    },
    {
        address: '安福县',
        code: '360829',
    },
    {
        address: '永新县',
        code: '360830',
    },
    {
        address: '井冈山市',
        code: '360881',
    },
    {
        address: '宜春市',
        code: '360900',
    },
    {
        address: '宜春市市辖区',
        code: '360901',
    },
    {
        address: '袁州区',
        code: '360902',
    },
    {
        address: '奉新县',
        code: '360921',
    },
    {
        address: '万载县',
        code: '360922',
    },
    {
        address: '上高县',
        code: '360923',
    },
    {
        address: '宜丰县',
        code: '360924',
    },
    {
        address: '靖安县',
        code: '360925',
    },
    {
        address: '铜鼓县',
        code: '360926',
    },
    {
        address: '丰城市',
        code: '360981',
    },
    {
        address: '樟树市',
        code: '360982',
    },
    {
        address: '高安市',
        code: '360983',
    },
    {
        address: '抚州市',
        code: '361000',
    },
    {
        address: '抚州市市辖区',
        code: '361001',
    },
    {
        address: '临川区',
        code: '361002',
    },
    {
        address: '东乡区',
        code: '361003',
    },
    {
        address: '南城县',
        code: '361021',
    },
    {
        address: '黎川县',
        code: '361022',
    },
    {
        address: '南丰县',
        code: '361023',
    },
    {
        address: '崇仁县',
        code: '361024',
    },
    {
        address: '乐安县',
        code: '361025',
    },
    {
        address: '宜黄县',
        code: '361026',
    },
    {
        address: '金溪县',
        code: '361027',
    },
    {
        address: '资溪县',
        code: '361028',
    },
    {
        address: '广昌县',
        code: '361030',
    },
    {
        address: '上饶市',
        code: '361100',
    },
    {
        address: '上饶市市辖区',
        code: '361101',
    },
    {
        address: '信州区',
        code: '361102',
    },
    {
        address: '广丰区',
        code: '361103',
    },
    {
        address: '广信区',
        code: '361104',
    },
    {
        address: '玉山县',
        code: '361123',
    },
    {
        address: '铅山县',
        code: '361124',
    },
    {
        address: '横峰县',
        code: '361125',
    },
    {
        address: '弋阳县',
        code: '361126',
    },
    {
        address: '余干县',
        code: '361127',
    },
    {
        address: '鄱阳县',
        code: '361128',
    },
    {
        address: '万年县',
        code: '361129',
    },
    {
        address: '婺源县',
        code: '361130',
    },
    {
        address: '德兴市',
        code: '361181',
    },
    {
        address: '山东省',
        code: '370000',
    },
    {
        address: '济南市',
        code: '370100',
    },
    {
        address: '济南市市辖区',
        code: '370101',
    },
    {
        address: '历下区',
        code: '370102',
    },
    {
        address: '市中区',
        code: '370103',
    },
    {
        address: '槐荫区',
        code: '370104',
    },
    {
        address: '天桥区',
        code: '370105',
    },
    {
        address: '历城区',
        code: '370112',
    },
    {
        address: '长清区',
        code: '370113',
    },
    {
        address: '章丘区',
        code: '370114',
    },
    {
        address: '平阴县',
        code: '370124',
    },
    {
        address: '济阳区',
        code: '370115',
    },
    {
        address: '商河县',
        code: '370126',
    },
    {
        address: '青岛市',
        code: '370200',
    },
    {
        address: '青岛市市辖区',
        code: '370201',
    },
    {
        address: '市南区',
        code: '370202',
    },
    {
        address: '市北区',
        code: '370203',
    },
    {
        address: '黄岛区',
        code: '370211',
    },
    {
        address: '崂山区',
        code: '370212',
    },
    {
        address: '李沧区',
        code: '370213',
    },
    {
        address: '城阳区',
        code: '370214',
    },
    {
        address: '即墨区',
        code: '370215',
    },
    {
        address: '胶州市',
        code: '370281',
    },
    {
        address: '平度市',
        code: '370283',
    },
    {
        address: '莱西市',
        code: '370285',
    },
    {
        address: '淄博市',
        code: '370300',
    },
    {
        address: '淄博市市辖区',
        code: '370301',
    },
    {
        address: '淄川区',
        code: '370302',
    },
    {
        address: '张店区',
        code: '370303',
    },
    {
        address: '博山区',
        code: '370304',
    },
    {
        address: '临淄区',
        code: '370305',
    },
    {
        address: '周村区',
        code: '370306',
    },
    {
        address: '桓台县',
        code: '370321',
    },
    {
        address: '高青县',
        code: '370322',
    },
    {
        address: '沂源县',
        code: '370323',
    },
    {
        address: '枣庄市',
        code: '370400',
    },
    {
        address: '枣庄市市辖区',
        code: '370401',
    },
    {
        address: '市中区',
        code: '370402',
    },
    {
        address: '薛城区',
        code: '370403',
    },
    {
        address: '峄城区',
        code: '370404',
    },
    {
        address: '台儿庄区',
        code: '370405',
    },
    {
        address: '山亭区',
        code: '370406',
    },
    {
        address: '滕州市',
        code: '370481',
    },
    {
        address: '东营市',
        code: '370500',
    },
    {
        address: '东营市市辖区',
        code: '370501',
    },
    {
        address: '东营区',
        code: '370502',
    },
    {
        address: '河口区',
        code: '370503',
    },
    {
        address: '垦利区',
        code: '370505',
    },
    {
        address: '利津县',
        code: '370522',
    },
    {
        address: '广饶县',
        code: '370523',
    },
    {
        address: '烟台市',
        code: '370600',
    },
    {
        address: '烟台市市辖区',
        code: '370601',
    },
    {
        address: '芝罘区',
        code: '370602',
    },
    {
        address: '福山区',
        code: '370611',
    },
    {
        address: '牟平区',
        code: '370612',
    },
    {
        address: '莱山区',
        code: '370613',
    },
    {
        address: '蓬莱区',
        code: '370614',
    },
    {
        address: '龙口市',
        code: '370681',
    },
    {
        address: '莱阳市',
        code: '370682',
    },
    {
        address: '莱州市',
        code: '370683',
    },
    {
        address: '招远市',
        code: '370685',
    },
    {
        address: '栖霞市',
        code: '370686',
    },
    {
        address: '海阳市',
        code: '370687',
    },
    {
        address: '潍坊市',
        code: '370700',
    },
    {
        address: '潍坊市市辖区',
        code: '370701',
    },
    {
        address: '潍城区',
        code: '370702',
    },
    {
        address: '寒亭区',
        code: '370703',
    },
    {
        address: '坊子区',
        code: '370704',
    },
    {
        address: '奎文区',
        code: '370705',
    },
    {
        address: '临朐县',
        code: '370724',
    },
    {
        address: '昌乐县',
        code: '370725',
    },
    {
        address: '青州市',
        code: '370781',
    },
    {
        address: '诸城市',
        code: '370782',
    },
    {
        address: '寿光市',
        code: '370783',
    },
    {
        address: '安丘市',
        code: '370784',
    },
    {
        address: '高密市',
        code: '370785',
    },
    {
        address: '昌邑市',
        code: '370786',
    },
    {
        address: '济宁市',
        code: '370800',
    },
    {
        address: '济宁市市辖区',
        code: '370801',
    },
    {
        address: '任城区',
        code: '370811',
    },
    {
        address: '兖州区',
        code: '370812',
    },
    {
        address: '微山县',
        code: '370826',
    },
    {
        address: '鱼台县',
        code: '370827',
    },
    {
        address: '金乡县',
        code: '370828',
    },
    {
        address: '嘉祥县',
        code: '370829',
    },
    {
        address: '汶上县',
        code: '370830',
    },
    {
        address: '泗水县',
        code: '370831',
    },
    {
        address: '梁山县',
        code: '370832',
    },
    {
        address: '曲阜市',
        code: '370881',
    },
    {
        address: '邹城市',
        code: '370883',
    },
    {
        address: '泰安市',
        code: '370900',
    },
    {
        address: '泰安市市辖区',
        code: '370901',
    },
    {
        address: '泰山区',
        code: '370902',
    },
    {
        address: '岱岳区',
        code: '370911',
    },
    {
        address: '宁阳县',
        code: '370921',
    },
    {
        address: '东平县',
        code: '370923',
    },
    {
        address: '新泰市',
        code: '370982',
    },
    {
        address: '肥城市',
        code: '370983',
    },
    {
        address: '威海市',
        code: '371000',
    },
    {
        address: '威海市市辖区',
        code: '371001',
    },
    {
        address: '环翠区',
        code: '371002',
    },
    {
        address: '文登区',
        code: '371003',
    },
    {
        address: '荣成市',
        code: '371082',
    },
    {
        address: '乳山市',
        code: '371083',
    },
    {
        address: '日照市',
        code: '371100',
    },
    {
        address: '日照市市辖区',
        code: '371101',
    },
    {
        address: '东港区',
        code: '371102',
    },
    {
        address: '岚山区',
        code: '371103',
    },
    {
        address: '五莲县',
        code: '371121',
    },
    {
        address: '莒县',
        code: '371122',
    },
    {
        address: '莱芜区',
        code: '370116',
    },
    {
        address: '钢城区',
        code: '370117',
    },
    {
        address: '临沂市',
        code: '371300',
    },
    {
        address: '临沂市市辖区',
        code: '371301',
    },
    {
        address: '兰山区',
        code: '371302',
    },
    {
        address: '罗庄区',
        code: '371311',
    },
    {
        address: '河东区',
        code: '371312',
    },
    {
        address: '沂南县',
        code: '371321',
    },
    {
        address: '郯城县',
        code: '371322',
    },
    {
        address: '沂水县',
        code: '371323',
    },
    {
        address: '兰陵县',
        code: '371324',
    },
    {
        address: '费县',
        code: '371325',
    },
    {
        address: '平邑县',
        code: '371326',
    },
    {
        address: '莒南县',
        code: '371327',
    },
    {
        address: '蒙阴县',
        code: '371328',
    },
    {
        address: '临沭县',
        code: '371329',
    },
    {
        address: '德州市',
        code: '371400',
    },
    {
        address: '德州市市辖区',
        code: '371401',
    },
    {
        address: '德城区',
        code: '371402',
    },
    {
        address: '陵城区',
        code: '371403',
    },
    {
        address: '宁津县',
        code: '371422',
    },
    {
        address: '庆云县',
        code: '371423',
    },
    {
        address: '临邑县',
        code: '371424',
    },
    {
        address: '齐河县',
        code: '371425',
    },
    {
        address: '平原县',
        code: '371426',
    },
    {
        address: '夏津县',
        code: '371427',
    },
    {
        address: '武城县',
        code: '371428',
    },
    {
        address: '乐陵市',
        code: '371481',
    },
    {
        address: '禹城市',
        code: '371482',
    },
    {
        address: '聊城市',
        code: '371500',
    },
    {
        address: '聊城市市辖区',
        code: '371501',
    },
    {
        address: '东昌府区',
        code: '371502',
    },
    {
        address: '阳谷县',
        code: '371521',
    },
    {
        address: '莘县',
        code: '371522',
    },
    {
        address: '茌平区',
        code: '371503',
    },
    {
        address: '东阿县',
        code: '371524',
    },
    {
        address: '冠县',
        code: '371525',
    },
    {
        address: '高唐县',
        code: '371526',
    },
    {
        address: '临清市',
        code: '371581',
    },
    {
        address: '滨州市',
        code: '371600',
    },
    {
        address: '滨州市市辖区',
        code: '371601',
    },
    {
        address: '滨城区',
        code: '371602',
    },
    {
        address: '沾化区',
        code: '371603',
    },
    {
        address: '惠民县',
        code: '371621',
    },
    {
        address: '阳信县',
        code: '371622',
    },
    {
        address: '无棣县',
        code: '371623',
    },
    {
        address: '博兴县',
        code: '371625',
    },
    {
        address: '邹平市',
        code: '371681',
    },
    {
        address: '菏泽市',
        code: '371700',
    },
    {
        address: '菏泽市市辖区',
        code: '371701',
    },
    {
        address: '牡丹区',
        code: '371702',
    },
    {
        address: '定陶区',
        code: '371703',
    },
    {
        address: '曹县',
        code: '371721',
    },
    {
        address: '单县',
        code: '371722',
    },
    {
        address: '成武县',
        code: '371723',
    },
    {
        address: '巨野县',
        code: '371724',
    },
    {
        address: '郓城县',
        code: '371725',
    },
    {
        address: '鄄城县',
        code: '371726',
    },
    {
        address: '东明县',
        code: '371728',
    },
    {
        address: '河南省',
        code: '410000',
    },
    {
        address: '郑州市',
        code: '410100',
    },
    {
        address: '郑州市市辖区',
        code: '410101',
    },
    {
        address: '中原区',
        code: '410102',
    },
    {
        address: '二七区',
        code: '410103',
    },
    {
        address: '管城回族区',
        code: '410104',
    },
    {
        address: '金水区',
        code: '410105',
    },
    {
        address: '上街区',
        code: '410106',
    },
    {
        address: '惠济区',
        code: '410108',
    },
    {
        address: '中牟县',
        code: '410122',
    },
    {
        address: '巩义市',
        code: '410181',
    },
    {
        address: '荥阳市',
        code: '410182',
    },
    {
        address: '新密市',
        code: '410183',
    },
    {
        address: '新郑市',
        code: '410184',
    },
    {
        address: '登封市',
        code: '410185',
    },
    {
        address: '开封市',
        code: '410200',
    },
    {
        address: '开封市市辖区',
        code: '410201',
    },
    {
        address: '龙亭区',
        code: '410202',
    },
    {
        address: '顺河回族区',
        code: '410203',
    },
    {
        address: '鼓楼区',
        code: '410204',
    },
    {
        address: '禹王台区',
        code: '410205',
    },
    {
        address: '祥符区',
        code: '410212',
    },
    {
        address: '杞县',
        code: '410221',
    },
    {
        address: '通许县',
        code: '410222',
    },
    {
        address: '尉氏县',
        code: '410223',
    },
    {
        address: '兰考县',
        code: '410225',
    },
    {
        address: '洛阳市',
        code: '410300',
    },
    {
        address: '洛阳市市辖区',
        code: '410301',
    },
    {
        address: '老城区',
        code: '410302',
    },
    {
        address: '西工区',
        code: '410303',
    },
    {
        address: '瀍河回族区',
        code: '410304',
    },
    {
        address: '涧西区',
        code: '410305',
    },
    {
        address: '孟津区',
        code: '410306',
    },
    {
        address: '洛龙区',
        code: '410311',
    },
    {
        address: '新安县',
        code: '410323',
    },
    {
        address: '栾川县',
        code: '410324',
    },
    {
        address: '嵩县',
        code: '410325',
    },
    {
        address: '汝阳县',
        code: '410326',
    },
    {
        address: '宜阳县',
        code: '410327',
    },
    {
        address: '洛宁县',
        code: '410328',
    },
    {
        address: '伊川县',
        code: '410329',
    },
    {
        address: '偃师区',
        code: '410381',
    },
    {
        address: '平顶山市',
        code: '410400',
    },
    {
        address: '平顶山市市辖区',
        code: '410401',
    },
    {
        address: '新华区',
        code: '410402',
    },
    {
        address: '卫东区',
        code: '410403',
    },
    {
        address: '石龙区',
        code: '410404',
    },
    {
        address: '湛河区',
        code: '410411',
    },
    {
        address: '宝丰县',
        code: '410421',
    },
    {
        address: '叶县',
        code: '410422',
    },
    {
        address: '鲁山县',
        code: '410423',
    },
    {
        address: '郏县',
        code: '410425',
    },
    {
        address: '舞钢市',
        code: '410481',
    },
    {
        address: '汝州市',
        code: '410482',
    },
    {
        address: '安阳市',
        code: '410500',
    },
    {
        address: '安阳市市辖区',
        code: '410501',
    },
    {
        address: '文峰区',
        code: '410502',
    },
    {
        address: '北关区',
        code: '410503',
    },
    {
        address: '殷都区',
        code: '410505',
    },
    {
        address: '龙安区',
        code: '410506',
    },
    {
        address: '安阳县',
        code: '410522',
    },
    {
        address: '汤阴县',
        code: '410523',
    },
    {
        address: '滑县',
        code: '410526',
    },
    {
        address: '内黄县',
        code: '410527',
    },
    {
        address: '林州市',
        code: '410581',
    },
    {
        address: '鹤壁市',
        code: '410600',
    },
    {
        address: '鹤壁市市辖区',
        code: '410601',
    },
    {
        address: '鹤山区',
        code: '410602',
    },
    {
        address: '山城区',
        code: '410603',
    },
    {
        address: '淇滨区',
        code: '410611',
    },
    {
        address: '浚县',
        code: '410621',
    },
    {
        address: '淇县',
        code: '410622',
    },
    {
        address: '新乡市',
        code: '410700',
    },
    {
        address: '新乡市市辖区',
        code: '410701',
    },
    {
        address: '红旗区',
        code: '410702',
    },
    {
        address: '卫滨区',
        code: '410703',
    },
    {
        address: '凤泉区',
        code: '410704',
    },
    {
        address: '牧野区',
        code: '410711',
    },
    {
        address: '新乡县',
        code: '410721',
    },
    {
        address: '获嘉县',
        code: '410724',
    },
    {
        address: '原阳县',
        code: '410725',
    },
    {
        address: '延津县',
        code: '410726',
    },
    {
        address: '封丘县',
        code: '410727',
    },
    {
        address: '长垣市',
        code: '410783',
    },
    {
        address: '卫辉市',
        code: '410781',
    },
    {
        address: '辉县市',
        code: '410782',
    },
    {
        address: '焦作市',
        code: '410800',
    },
    {
        address: '焦作市市辖区',
        code: '410801',
    },
    {
        address: '解放区',
        code: '410802',
    },
    {
        address: '中站区',
        code: '410803',
    },
    {
        address: '马村区',
        code: '410804',
    },
    {
        address: '山阳区',
        code: '410811',
    },
    {
        address: '修武县',
        code: '410821',
    },
    {
        address: '博爱县',
        code: '410822',
    },
    {
        address: '武陟县',
        code: '410823',
    },
    {
        address: '温县',
        code: '410825',
    },
    {
        address: '沁阳市',
        code: '410882',
    },
    {
        address: '孟州市',
        code: '410883',
    },
    {
        address: '濮阳市',
        code: '410900',
    },
    {
        address: '濮阳市市辖区',
        code: '410901',
    },
    {
        address: '华龙区',
        code: '410902',
    },
    {
        address: '清丰县',
        code: '410922',
    },
    {
        address: '南乐县',
        code: '410923',
    },
    {
        address: '范县',
        code: '410926',
    },
    {
        address: '台前县',
        code: '410927',
    },
    {
        address: '濮阳县',
        code: '410928',
    },
    {
        address: '许昌市',
        code: '411000',
    },
    {
        address: '许昌市市辖区',
        code: '411001',
    },
    {
        address: '魏都区',
        code: '411002',
    },
    {
        address: '建安区',
        code: '411003',
    },
    {
        address: '鄢陵县',
        code: '411024',
    },
    {
        address: '襄城县',
        code: '411025',
    },
    {
        address: '禹州市',
        code: '411081',
    },
    {
        address: '长葛市',
        code: '411082',
    },
    {
        address: '漯河市',
        code: '411100',
    },
    {
        address: '漯河市市辖区',
        code: '411101',
    },
    {
        address: '源汇区',
        code: '411102',
    },
    {
        address: '郾城区',
        code: '411103',
    },
    {
        address: '召陵区',
        code: '411104',
    },
    {
        address: '舞阳县',
        code: '411121',
    },
    {
        address: '临颍县',
        code: '411122',
    },
    {
        address: '三门峡市',
        code: '411200',
    },
    {
        address: '三门峡市市辖区',
        code: '411201',
    },
    {
        address: '湖滨区',
        code: '411202',
    },
    {
        address: '陕州区',
        code: '411203',
    },
    {
        address: '渑池县',
        code: '411221',
    },
    {
        address: '卢氏县',
        code: '411224',
    },
    {
        address: '义马市',
        code: '411281',
    },
    {
        address: '灵宝市',
        code: '411282',
    },
    {
        address: '南阳市',
        code: '411300',
    },
    {
        address: '南阳市市辖区',
        code: '411301',
    },
    {
        address: '宛城区',
        code: '411302',
    },
    {
        address: '卧龙区',
        code: '411303',
    },
    {
        address: '南召县',
        code: '411321',
    },
    {
        address: '方城县',
        code: '411322',
    },
    {
        address: '西峡县',
        code: '411323',
    },
    {
        address: '镇平县',
        code: '411324',
    },
    {
        address: '内乡县',
        code: '411325',
    },
    {
        address: '淅川县',
        code: '411326',
    },
    {
        address: '社旗县',
        code: '411327',
    },
    {
        address: '唐河县',
        code: '411328',
    },
    {
        address: '新野县',
        code: '411329',
    },
    {
        address: '桐柏县',
        code: '411330',
    },
    {
        address: '邓州市',
        code: '411381',
    },
    {
        address: '商丘市',
        code: '411400',
    },
    {
        address: '商丘市市辖区',
        code: '411401',
    },
    {
        address: '梁园区',
        code: '411402',
    },
    {
        address: '睢阳区',
        code: '411403',
    },
    {
        address: '民权县',
        code: '411421',
    },
    {
        address: '睢县',
        code: '411422',
    },
    {
        address: '宁陵县',
        code: '411423',
    },
    {
        address: '柘城县',
        code: '411424',
    },
    {
        address: '虞城县',
        code: '411425',
    },
    {
        address: '夏邑县',
        code: '411426',
    },
    {
        address: '永城市',
        code: '411481',
    },
    {
        address: '信阳市',
        code: '411500',
    },
    {
        address: '信阳市市辖区',
        code: '411501',
    },
    {
        address: '浉河区',
        code: '411502',
    },
    {
        address: '平桥区',
        code: '411503',
    },
    {
        address: '罗山县',
        code: '411521',
    },
    {
        address: '光山县',
        code: '411522',
    },
    {
        address: '新县',
        code: '411523',
    },
    {
        address: '商城县',
        code: '411524',
    },
    {
        address: '固始县',
        code: '411525',
    },
    {
        address: '潢川县',
        code: '411526',
    },
    {
        address: '淮滨县',
        code: '411527',
    },
    {
        address: '息县',
        code: '411528',
    },
    {
        address: '周口市',
        code: '411600',
    },
    {
        address: '周口市市辖区',
        code: '411601',
    },
    {
        address: '川汇区',
        code: '411602',
    },
    {
        address: '扶沟县',
        code: '411621',
    },
    {
        address: '西华县',
        code: '411622',
    },
    {
        address: '商水县',
        code: '411623',
    },
    {
        address: '沈丘县',
        code: '411624',
    },
    {
        address: '郸城县',
        code: '411625',
    },
    {
        address: '淮阳区',
        code: '411603',
    },
    {
        address: '太康县',
        code: '411627',
    },
    {
        address: '鹿邑县',
        code: '411628',
    },
    {
        address: '项城市',
        code: '411681',
    },
    {
        address: '驻马店市',
        code: '411700',
    },
    {
        address: '驻马店市市辖区',
        code: '411701',
    },
    {
        address: '驿城区',
        code: '411702',
    },
    {
        address: '西平县',
        code: '411721',
    },
    {
        address: '上蔡县',
        code: '411722',
    },
    {
        address: '平舆县',
        code: '411723',
    },
    {
        address: '正阳县',
        code: '411724',
    },
    {
        address: '确山县',
        code: '411725',
    },
    {
        address: '泌阳县',
        code: '411726',
    },
    {
        address: '汝南县',
        code: '411727',
    },
    {
        address: '遂平县',
        code: '411728',
    },
    {
        address: '新蔡县',
        code: '411729',
    },
    {
        address: '济源市',
        code: '419001',
    },
    {
        address: '湖北省',
        code: '420000',
    },
    {
        address: '武汉市',
        code: '420100',
    },
    {
        address: '武汉市市辖区',
        code: '420101',
    },
    {
        address: '江岸区',
        code: '420102',
    },
    {
        address: '江汉区',
        code: '420103',
    },
    {
        address: '硚口区',
        code: '420104',
    },
    {
        address: '汉阳区',
        code: '420105',
    },
    {
        address: '武昌区',
        code: '420106',
    },
    {
        address: '青山区',
        code: '420107',
    },
    {
        address: '洪山区',
        code: '420111',
    },
    {
        address: '东西湖区',
        code: '420112',
    },
    {
        address: '汉南区',
        code: '420113',
    },
    {
        address: '蔡甸区',
        code: '420114',
    },
    {
        address: '江夏区',
        code: '420115',
    },
    {
        address: '黄陂区',
        code: '420116',
    },
    {
        address: '新洲区',
        code: '420117',
    },
    {
        address: '黄石市',
        code: '420200',
    },
    {
        address: '黄石市市辖区',
        code: '420201',
    },
    {
        address: '黄石港区',
        code: '420202',
    },
    {
        address: '西塞山区',
        code: '420203',
    },
    {
        address: '下陆区',
        code: '420204',
    },
    {
        address: '铁山区',
        code: '420205',
    },
    {
        address: '阳新县',
        code: '420222',
    },
    {
        address: '大冶市',
        code: '420281',
    },
    {
        address: '十堰市',
        code: '420300',
    },
    {
        address: '十堰市市辖区',
        code: '420301',
    },
    {
        address: '茅箭区',
        code: '420302',
    },
    {
        address: '张湾区',
        code: '420303',
    },
    {
        address: '郧阳区',
        code: '420304',
    },
    {
        address: '郧西县',
        code: '420322',
    },
    {
        address: '竹山县',
        code: '420323',
    },
    {
        address: '竹溪县',
        code: '420324',
    },
    {
        address: '房县',
        code: '420325',
    },
    {
        address: '丹江口市',
        code: '420381',
    },
    {
        address: '宜昌市',
        code: '420500',
    },
    {
        address: '宜昌市市辖区',
        code: '420501',
    },
    {
        address: '西陵区',
        code: '420502',
    },
    {
        address: '伍家岗区',
        code: '420503',
    },
    {
        address: '点军区',
        code: '420504',
    },
    {
        address: '猇亭区',
        code: '420505',
    },
    {
        address: '夷陵区',
        code: '420506',
    },
    {
        address: '远安县',
        code: '420525',
    },
    {
        address: '兴山县',
        code: '420526',
    },
    {
        address: '秭归县',
        code: '420527',
    },
    {
        address: '长阳土家族自治县',
        code: '420528',
    },
    {
        address: '五峰土家族自治县',
        code: '420529',
    },
    {
        address: '宜都市',
        code: '420581',
    },
    {
        address: '当阳市',
        code: '420582',
    },
    {
        address: '枝江市',
        code: '420583',
    },
    {
        address: '襄阳市',
        code: '420600',
    },
    {
        address: '襄阳市市辖区',
        code: '420601',
    },
    {
        address: '襄城区',
        code: '420602',
    },
    {
        address: '樊城区',
        code: '420606',
    },
    {
        address: '襄州区',
        code: '420607',
    },
    {
        address: '南漳县',
        code: '420624',
    },
    {
        address: '谷城县',
        code: '420625',
    },
    {
        address: '保康县',
        code: '420626',
    },
    {
        address: '老河口市',
        code: '420682',
    },
    {
        address: '枣阳市',
        code: '420683',
    },
    {
        address: '宜城市',
        code: '420684',
    },
    {
        address: '鄂州市',
        code: '420700',
    },
    {
        address: '鄂州市市辖区',
        code: '420701',
    },
    {
        address: '梁子湖区',
        code: '420702',
    },
    {
        address: '华容区',
        code: '420703',
    },
    {
        address: '鄂城区',
        code: '420704',
    },
    {
        address: '荆门市',
        code: '420800',
    },
    {
        address: '荆门市市辖区',
        code: '420801',
    },
    {
        address: '东宝区',
        code: '420802',
    },
    {
        address: '掇刀区',
        code: '420804',
    },
    {
        address: '京山市',
        code: '420882',
    },
    {
        address: '沙洋县',
        code: '420822',
    },
    {
        address: '钟祥市',
        code: '420881',
    },
    {
        address: '孝感市',
        code: '420900',
    },
    {
        address: '孝感市市辖区',
        code: '420901',
    },
    {
        address: '孝南区',
        code: '420902',
    },
    {
        address: '孝昌县',
        code: '420921',
    },
    {
        address: '大悟县',
        code: '420922',
    },
    {
        address: '云梦县',
        code: '420923',
    },
    {
        address: '应城市',
        code: '420981',
    },
    {
        address: '安陆市',
        code: '420982',
    },
    {
        address: '汉川市',
        code: '420984',
    },
    {
        address: '荆州市',
        code: '421000',
    },
    {
        address: '荆州市市辖区',
        code: '421001',
    },
    {
        address: '沙市区',
        code: '421002',
    },
    {
        address: '荆州区',
        code: '421003',
    },
    {
        address: '公安县',
        code: '421022',
    },
    {
        address: '监利市',
        code: '421023',
    },
    {
        address: '江陵县',
        code: '421024',
    },
    {
        address: '石首市',
        code: '421081',
    },
    {
        address: '洪湖市',
        code: '421083',
    },
    {
        address: '松滋市',
        code: '421087',
    },
    {
        address: '黄冈市',
        code: '421100',
    },
    {
        address: '黄冈市市辖区',
        code: '421101',
    },
    {
        address: '黄州区',
        code: '421102',
    },
    {
        address: '团风县',
        code: '421121',
    },
    {
        address: '红安县',
        code: '421122',
    },
    {
        address: '罗田县',
        code: '421123',
    },
    {
        address: '英山县',
        code: '421124',
    },
    {
        address: '浠水县',
        code: '421125',
    },
    {
        address: '蕲春县',
        code: '421126',
    },
    {
        address: '黄梅县',
        code: '421127',
    },
    {
        address: '麻城市',
        code: '421181',
    },
    {
        address: '武穴市',
        code: '421182',
    },
    {
        address: '咸宁市',
        code: '421200',
    },
    {
        address: '咸宁市市辖区',
        code: '421201',
    },
    {
        address: '咸安区',
        code: '421202',
    },
    {
        address: '嘉鱼县',
        code: '421221',
    },
    {
        address: '通城县',
        code: '421222',
    },
    {
        address: '崇阳县',
        code: '421223',
    },
    {
        address: '通山县',
        code: '421224',
    },
    {
        address: '赤壁市',
        code: '421281',
    },
    {
        address: '随州市',
        code: '421300',
    },
    {
        address: '随州市市辖区',
        code: '421301',
    },
    {
        address: '曾都区',
        code: '421303',
    },
    {
        address: '随县',
        code: '421321',
    },
    {
        address: '广水市',
        code: '421381',
    },
    {
        address: '恩施土家族苗族自治州',
        code: '422800',
    },
    {
        address: '恩施市',
        code: '422801',
    },
    {
        address: '利川市',
        code: '422802',
    },
    {
        address: '建始县',
        code: '422822',
    },
    {
        address: '巴东县',
        code: '422823',
    },
    {
        address: '宣恩县',
        code: '422825',
    },
    {
        address: '咸丰县',
        code: '422826',
    },
    {
        address: '来凤县',
        code: '422827',
    },
    {
        address: '鹤峰县',
        code: '422828',
    },
    {
        address: '仙桃市',
        code: '429004',
    },
    {
        address: '潜江市',
        code: '429005',
    },
    {
        address: '天门市',
        code: '429006',
    },
    {
        address: '神农架林区',
        code: '429021',
    },
    {
        address: '湖南省',
        code: '430000',
    },
    {
        address: '长沙市',
        code: '430100',
    },
    {
        address: '长沙市市辖区',
        code: '430101',
    },
    {
        address: '芙蓉区',
        code: '430102',
    },
    {
        address: '天心区',
        code: '430103',
    },
    {
        address: '岳麓区',
        code: '430104',
    },
    {
        address: '开福区',
        code: '430105',
    },
    {
        address: '雨花区',
        code: '430111',
    },
    {
        address: '望城区',
        code: '430112',
    },
    {
        address: '长沙县',
        code: '430121',
    },
    {
        address: '浏阳市',
        code: '430181',
    },
    {
        address: '宁乡市',
        code: '430182',
    },
    {
        address: '株洲市',
        code: '430200',
    },
    {
        address: '株洲市市辖区',
        code: '430201',
    },
    {
        address: '荷塘区',
        code: '430202',
    },
    {
        address: '芦淞区',
        code: '430203',
    },
    {
        address: '石峰区',
        code: '430204',
    },
    {
        address: '天元区',
        code: '430211',
    },
    {
        address: '渌口区',
        code: '430212',
    },
    {
        address: '攸县',
        code: '430223',
    },
    {
        address: '茶陵县',
        code: '430224',
    },
    {
        address: '炎陵县',
        code: '430225',
    },
    {
        address: '醴陵市',
        code: '430281',
    },
    {
        address: '湘潭市',
        code: '430300',
    },
    {
        address: '湘潭市市辖区',
        code: '430301',
    },
    {
        address: '雨湖区',
        code: '430302',
    },
    {
        address: '岳塘区',
        code: '430304',
    },
    {
        address: '湘潭县',
        code: '430321',
    },
    {
        address: '湘乡市',
        code: '430381',
    },
    {
        address: '韶山市',
        code: '430382',
    },
    {
        address: '衡阳市',
        code: '430400',
    },
    {
        address: '衡阳市市辖区',
        code: '430401',
    },
    {
        address: '珠晖区',
        code: '430405',
    },
    {
        address: '雁峰区',
        code: '430406',
    },
    {
        address: '石鼓区',
        code: '430407',
    },
    {
        address: '蒸湘区',
        code: '430408',
    },
    {
        address: '南岳区',
        code: '430412',
    },
    {
        address: '衡阳县',
        code: '430421',
    },
    {
        address: '衡南县',
        code: '430422',
    },
    {
        address: '衡山县',
        code: '430423',
    },
    {
        address: '衡东县',
        code: '430424',
    },
    {
        address: '祁东县',
        code: '430426',
    },
    {
        address: '耒阳市',
        code: '430481',
    },
    {
        address: '常宁市',
        code: '430482',
    },
    {
        address: '邵阳市',
        code: '430500',
    },
    {
        address: '邵阳市市辖区',
        code: '430501',
    },
    {
        address: '双清区',
        code: '430502',
    },
    {
        address: '大祥区',
        code: '430503',
    },
    {
        address: '北塔区',
        code: '430511',
    },
    {
        address: '邵东市',
        code: '430582',
    },
    {
        address: '新邵县',
        code: '430522',
    },
    {
        address: '邵阳县',
        code: '430523',
    },
    {
        address: '隆回县',
        code: '430524',
    },
    {
        address: '洞口县',
        code: '430525',
    },
    {
        address: '绥宁县',
        code: '430527',
    },
    {
        address: '新宁县',
        code: '430528',
    },
    {
        address: '城步苗族自治县',
        code: '430529',
    },
    {
        address: '武冈市',
        code: '430581',
    },
    {
        address: '岳阳市',
        code: '430600',
    },
    {
        address: '岳阳市市辖区',
        code: '430601',
    },
    {
        address: '岳阳楼区',
        code: '430602',
    },
    {
        address: '云溪区',
        code: '430603',
    },
    {
        address: '君山区',
        code: '430611',
    },
    {
        address: '岳阳县',
        code: '430621',
    },
    {
        address: '华容县',
        code: '430623',
    },
    {
        address: '湘阴县',
        code: '430624',
    },
    {
        address: '平江县',
        code: '430626',
    },
    {
        address: '汨罗市',
        code: '430681',
    },
    {
        address: '临湘市',
        code: '430682',
    },
    {
        address: '常德市',
        code: '430700',
    },
    {
        address: '常德市市辖区',
        code: '430701',
    },
    {
        address: '武陵区',
        code: '430702',
    },
    {
        address: '鼎城区',
        code: '430703',
    },
    {
        address: '安乡县',
        code: '430721',
    },
    {
        address: '汉寿县',
        code: '430722',
    },
    {
        address: '澧县',
        code: '430723',
    },
    {
        address: '临澧县',
        code: '430724',
    },
    {
        address: '桃源县',
        code: '430725',
    },
    {
        address: '石门县',
        code: '430726',
    },
    {
        address: '津市市',
        code: '430781',
    },
    {
        address: '张家界市',
        code: '430800',
    },
    {
        address: '张家界市市辖区',
        code: '430801',
    },
    {
        address: '永定区',
        code: '430802',
    },
    {
        address: '武陵源区',
        code: '430811',
    },
    {
        address: '慈利县',
        code: '430821',
    },
    {
        address: '桑植县',
        code: '430822',
    },
    {
        address: '益阳市',
        code: '430900',
    },
    {
        address: '益阳市市辖区',
        code: '430901',
    },
    {
        address: '资阳区',
        code: '430902',
    },
    {
        address: '赫山区',
        code: '430903',
    },
    {
        address: '南县',
        code: '430921',
    },
    {
        address: '桃江县',
        code: '430922',
    },
    {
        address: '安化县',
        code: '430923',
    },
    {
        address: '沅江市',
        code: '430981',
    },
    {
        address: '郴州市',
        code: '431000',
    },
    {
        address: '郴州市市辖区',
        code: '431001',
    },
    {
        address: '北湖区',
        code: '431002',
    },
    {
        address: '苏仙区',
        code: '431003',
    },
    {
        address: '桂阳县',
        code: '431021',
    },
    {
        address: '宜章县',
        code: '431022',
    },
    {
        address: '永兴县',
        code: '431023',
    },
    {
        address: '嘉禾县',
        code: '431024',
    },
    {
        address: '临武县',
        code: '431025',
    },
    {
        address: '汝城县',
        code: '431026',
    },
    {
        address: '桂东县',
        code: '431027',
    },
    {
        address: '安仁县',
        code: '431028',
    },
    {
        address: '资兴市',
        code: '431081',
    },
    {
        address: '永州市',
        code: '431100',
    },
    {
        address: '永州市市辖区',
        code: '431101',
    },
    {
        address: '零陵区',
        code: '431102',
    },
    {
        address: '冷水滩区',
        code: '431103',
    },
    {
        address: '祁阳市',
        code: '431121',
    },
    {
        address: '东安县',
        code: '431122',
    },
    {
        address: '双牌县',
        code: '431123',
    },
    {
        address: '道县',
        code: '431124',
    },
    {
        address: '江永县',
        code: '431125',
    },
    {
        address: '宁远县',
        code: '431126',
    },
    {
        address: '蓝山县',
        code: '431127',
    },
    {
        address: '新田县',
        code: '431128',
    },
    {
        address: '江华瑶族自治县',
        code: '431129',
    },
    {
        address: '怀化市',
        code: '431200',
    },
    {
        address: '怀化市市辖区',
        code: '431201',
    },
    {
        address: '鹤城区',
        code: '431202',
    },
    {
        address: '中方县',
        code: '431221',
    },
    {
        address: '沅陵县',
        code: '431222',
    },
    {
        address: '辰溪县',
        code: '431223',
    },
    {
        address: '溆浦县',
        code: '431224',
    },
    {
        address: '会同县',
        code: '431225',
    },
    {
        address: '麻阳苗族自治县',
        code: '431226',
    },
    {
        address: '新晃侗族自治县',
        code: '431227',
    },
    {
        address: '芷江侗族自治县',
        code: '431228',
    },
    {
        address: '靖州苗族侗族自治县',
        code: '431229',
    },
    {
        address: '通道侗族自治县',
        code: '431230',
    },
    {
        address: '洪江市',
        code: '431281',
    },
    {
        address: '娄底市',
        code: '431300',
    },
    {
        address: '娄底市市辖区',
        code: '431301',
    },
    {
        address: '娄星区',
        code: '431302',
    },
    {
        address: '双峰县',
        code: '431321',
    },
    {
        address: '新化县',
        code: '431322',
    },
    {
        address: '冷水江市',
        code: '431381',
    },
    {
        address: '涟源市',
        code: '431382',
    },
    {
        address: '湘西土家族苗族自治州',
        code: '433100',
    },
    {
        address: '吉首市',
        code: '433101',
    },
    {
        address: '泸溪县',
        code: '433122',
    },
    {
        address: '凤凰县',
        code: '433123',
    },
    {
        address: '花垣县',
        code: '433124',
    },
    {
        address: '保靖县',
        code: '433125',
    },
    {
        address: '古丈县',
        code: '433126',
    },
    {
        address: '永顺县',
        code: '433127',
    },
    {
        address: '龙山县',
        code: '433130',
    },
    {
        address: '广东省',
        code: '440000',
    },
    {
        address: '广州市',
        code: '440100',
    },
    {
        address: '广州市市辖区',
        code: '440101',
    },
    {
        address: '荔湾区',
        code: '440103',
    },
    {
        address: '越秀区',
        code: '440104',
    },
    {
        address: '海珠区',
        code: '440105',
    },
    {
        address: '天河区',
        code: '440106',
    },
    {
        address: '白云区',
        code: '440111',
    },
    {
        address: '黄埔区',
        code: '440112',
    },
    {
        address: '番禺区',
        code: '440113',
    },
    {
        address: '花都区',
        code: '440114',
    },
    {
        address: '南沙区',
        code: '440115',
    },
    {
        address: '从化区',
        code: '440117',
    },
    {
        address: '增城区',
        code: '440118',
    },
    {
        address: '韶关市',
        code: '440200',
    },
    {
        address: '韶关市市辖区',
        code: '440201',
    },
    {
        address: '武江区',
        code: '440203',
    },
    {
        address: '浈江区',
        code: '440204',
    },
    {
        address: '曲江区',
        code: '440205',
    },
    {
        address: '始兴县',
        code: '440222',
    },
    {
        address: '仁化县',
        code: '440224',
    },
    {
        address: '翁源县',
        code: '440229',
    },
    {
        address: '乳源瑶族自治县',
        code: '440232',
    },
    {
        address: '新丰县',
        code: '440233',
    },
    {
        address: '乐昌市',
        code: '440281',
    },
    {
        address: '南雄市',
        code: '440282',
    },
    {
        address: '深圳市',
        code: '440300',
    },
    {
        address: '深圳市市辖区',
        code: '440301',
    },
    {
        address: '罗湖区',
        code: '440303',
    },
    {
        address: '福田区',
        code: '440304',
    },
    {
        address: '南山区',
        code: '440305',
    },
    {
        address: '宝安区',
        code: '440306',
    },
    {
        address: '龙岗区',
        code: '440307',
    },
    {
        address: '盐田区',
        code: '440308',
    },
    {
        address: '龙华区',
        code: '440309',
    },
    {
        address: '坪山区',
        code: '440310',
    },
    {
        address: '光明区',
        code: '440311',
    },
    {
        address: '珠海市',
        code: '440400',
    },
    {
        address: '珠海市市辖区',
        code: '440401',
    },
    {
        address: '香洲区',
        code: '440402',
    },
    {
        address: '斗门区',
        code: '440403',
    },
    {
        address: '金湾区',
        code: '440404',
    },
    {
        address: '汕头市',
        code: '440500',
    },
    {
        address: '汕头市市辖区',
        code: '440501',
    },
    {
        address: '龙湖区',
        code: '440507',
    },
    {
        address: '金平区',
        code: '440511',
    },
    {
        address: '濠江区',
        code: '440512',
    },
    {
        address: '潮阳区',
        code: '440513',
    },
    {
        address: '潮南区',
        code: '440514',
    },
    {
        address: '澄海区',
        code: '440515',
    },
    {
        address: '南澳县',
        code: '440523',
    },
    {
        address: '佛山市',
        code: '440600',
    },
    {
        address: '佛山市市辖区',
        code: '440601',
    },
    {
        address: '禅城区',
        code: '440604',
    },
    {
        address: '南海区',
        code: '440605',
    },
    {
        address: '顺德区',
        code: '440606',
    },
    {
        address: '三水区',
        code: '440607',
    },
    {
        address: '高明区',
        code: '440608',
    },
    {
        address: '江门市',
        code: '440700',
    },
    {
        address: '江门市市辖区',
        code: '440701',
    },
    {
        address: '蓬江区',
        code: '440703',
    },
    {
        address: '江海区',
        code: '440704',
    },
    {
        address: '新会区',
        code: '440705',
    },
    {
        address: '台山市',
        code: '440781',
    },
    {
        address: '开平市',
        code: '440783',
    },
    {
        address: '鹤山市',
        code: '440784',
    },
    {
        address: '恩平市',
        code: '440785',
    },
    {
        address: '湛江市',
        code: '440800',
    },
    {
        address: '湛江市市辖区',
        code: '440801',
    },
    {
        address: '赤坎区',
        code: '440802',
    },
    {
        address: '霞山区',
        code: '440803',
    },
    {
        address: '坡头区',
        code: '440804',
    },
    {
        address: '麻章区',
        code: '440811',
    },
    {
        address: '遂溪县',
        code: '440823',
    },
    {
        address: '徐闻县',
        code: '440825',
    },
    {
        address: '廉江市',
        code: '440881',
    },
    {
        address: '雷州市',
        code: '440882',
    },
    {
        address: '吴川市',
        code: '440883',
    },
    {
        address: '茂名市',
        code: '440900',
    },
    {
        address: '茂名市市辖区',
        code: '440901',
    },
    {
        address: '茂南区',
        code: '440902',
    },
    {
        address: '电白区',
        code: '440904',
    },
    {
        address: '高州市',
        code: '440981',
    },
    {
        address: '化州市',
        code: '440982',
    },
    {
        address: '信宜市',
        code: '440983',
    },
    {
        address: '肇庆市',
        code: '441200',
    },
    {
        address: '肇庆市市辖区',
        code: '441201',
    },
    {
        address: '端州区',
        code: '441202',
    },
    {
        address: '鼎湖区',
        code: '441203',
    },
    {
        address: '高要区',
        code: '441204',
    },
    {
        address: '广宁县',
        code: '441223',
    },
    {
        address: '怀集县',
        code: '441224',
    },
    {
        address: '封开县',
        code: '441225',
    },
    {
        address: '德庆县',
        code: '441226',
    },
    {
        address: '四会市',
        code: '441284',
    },
    {
        address: '惠州市',
        code: '441300',
    },
    {
        address: '惠州市市辖区',
        code: '441301',
    },
    {
        address: '惠城区',
        code: '441302',
    },
    {
        address: '惠阳区',
        code: '441303',
    },
    {
        address: '博罗县',
        code: '441322',
    },
    {
        address: '惠东县',
        code: '441323',
    },
    {
        address: '龙门县',
        code: '441324',
    },
    {
        address: '梅州市',
        code: '441400',
    },
    {
        address: '梅州市市辖区',
        code: '441401',
    },
    {
        address: '梅江区',
        code: '441402',
    },
    {
        address: '梅县区',
        code: '441403',
    },
    {
        address: '大埔县',
        code: '441422',
    },
    {
        address: '丰顺县',
        code: '441423',
    },
    {
        address: '五华县',
        code: '441424',
    },
    {
        address: '平远县',
        code: '441426',
    },
    {
        address: '蕉岭县',
        code: '441427',
    },
    {
        address: '兴宁市',
        code: '441481',
    },
    {
        address: '汕尾市',
        code: '441500',
    },
    {
        address: '汕尾市市辖区',
        code: '441501',
    },
    {
        address: '城区',
        code: '441502',
    },
    {
        address: '海丰县',
        code: '441521',
    },
    {
        address: '陆河县',
        code: '441523',
    },
    {
        address: '陆丰市',
        code: '441581',
    },
    {
        address: '河源市',
        code: '441600',
    },
    {
        address: '河源市市辖区',
        code: '441601',
    },
    {
        address: '源城区',
        code: '441602',
    },
    {
        address: '紫金县',
        code: '441621',
    },
    {
        address: '龙川县',
        code: '441622',
    },
    {
        address: '连平县',
        code: '441623',
    },
    {
        address: '和平县',
        code: '441624',
    },
    {
        address: '东源县',
        code: '441625',
    },
    {
        address: '阳江市',
        code: '441700',
    },
    {
        address: '阳江市市辖区',
        code: '441701',
    },
    {
        address: '江城区',
        code: '441702',
    },
    {
        address: '阳东区',
        code: '441704',
    },
    {
        address: '阳西县',
        code: '441721',
    },
    {
        address: '阳春市',
        code: '441781',
    },
    {
        address: '清远市',
        code: '441800',
    },
    {
        address: '清远市市辖区',
        code: '441801',
    },
    {
        address: '清城区',
        code: '441802',
    },
    {
        address: '清新区',
        code: '441803',
    },
    {
        address: '佛冈县',
        code: '441821',
    },
    {
        address: '阳山县',
        code: '441823',
    },
    {
        address: '连山壮族瑶族自治县',
        code: '441825',
    },
    {
        address: '连南瑶族自治县',
        code: '441826',
    },
    {
        address: '英德市',
        code: '441881',
    },
    {
        address: '连州市',
        code: '441882',
    },
    {
        address: '东莞市',
        code: '441900',
    },
    {
        address: '中山市',
        code: '442000',
    },
    {
        address: '东沙群岛',
        code: '442101',
    },
    {
        address: '潮州市',
        code: '445100',
    },
    {
        address: '潮州市市辖区',
        code: '445101',
    },
    {
        address: '湘桥区',
        code: '445102',
    },
    {
        address: '潮安区',
        code: '445103',
    },
    {
        address: '饶平县',
        code: '445122',
    },
    {
        address: '揭阳市',
        code: '445200',
    },
    {
        address: '揭阳市市辖区',
        code: '445201',
    },
    {
        address: '榕城区',
        code: '445202',
    },
    {
        address: '揭东区',
        code: '445203',
    },
    {
        address: '揭西县',
        code: '445222',
    },
    {
        address: '惠来县',
        code: '445224',
    },
    {
        address: '普宁市',
        code: '445281',
    },
    {
        address: '云浮市',
        code: '445300',
    },
    {
        address: '云浮市市辖区',
        code: '445301',
    },
    {
        address: '云城区',
        code: '445302',
    },
    {
        address: '云安区',
        code: '445303',
    },
    {
        address: '新兴县',
        code: '445321',
    },
    {
        address: '郁南县',
        code: '445322',
    },
    {
        address: '罗定市',
        code: '445381',
    },
    {
        address: '广西壮族自治区',
        code: '450000',
    },
    {
        address: '南宁市',
        code: '450100',
    },
    {
        address: '南宁市市辖区',
        code: '450101',
    },
    {
        address: '兴宁区',
        code: '450102',
    },
    {
        address: '青秀区',
        code: '450103',
    },
    {
        address: '江南区',
        code: '450105',
    },
    {
        address: '西乡塘区',
        code: '450107',
    },
    {
        address: '良庆区',
        code: '450108',
    },
    {
        address: '邕宁区',
        code: '450109',
    },
    {
        address: '武鸣区',
        code: '450110',
    },
    {
        address: '隆安县',
        code: '450123',
    },
    {
        address: '马山县',
        code: '450124',
    },
    {
        address: '上林县',
        code: '450125',
    },
    {
        address: '宾阳县',
        code: '450126',
    },
    {
        address: '横县',
        code: '450127',
    },
    {
        address: '柳州市',
        code: '450200',
    },
    {
        address: '柳州市市辖区',
        code: '450201',
    },
    {
        address: '城中区',
        code: '450202',
    },
    {
        address: '鱼峰区',
        code: '450203',
    },
    {
        address: '柳南区',
        code: '450204',
    },
    {
        address: '柳北区',
        code: '450205',
    },
    {
        address: '柳江区',
        code: '450206',
    },
    {
        address: '柳城县',
        code: '450222',
    },
    {
        address: '鹿寨县',
        code: '450223',
    },
    {
        address: '融安县',
        code: '450224',
    },
    {
        address: '融水苗族自治县',
        code: '450225',
    },
    {
        address: '三江侗族自治县',
        code: '450226',
    },
    {
        address: '桂林市',
        code: '450300',
    },
    {
        address: '桂林市市辖区',
        code: '450301',
    },
    {
        address: '秀峰区',
        code: '450302',
    },
    {
        address: '叠彩区',
        code: '450303',
    },
    {
        address: '象山区',
        code: '450304',
    },
    {
        address: '七星区',
        code: '450305',
    },
    {
        address: '雁山区',
        code: '450311',
    },
    {
        address: '临桂区',
        code: '450312',
    },
    {
        address: '阳朔县',
        code: '450321',
    },
    {
        address: '灵川县',
        code: '450323',
    },
    {
        address: '全州县',
        code: '450324',
    },
    {
        address: '兴安县',
        code: '450325',
    },
    {
        address: '永福县',
        code: '450326',
    },
    {
        address: '灌阳县',
        code: '450327',
    },
    {
        address: '龙胜各族自治县',
        code: '450328',
    },
    {
        address: '资源县',
        code: '450329',
    },
    {
        address: '平乐县',
        code: '450330',
    },
    {
        address: '荔浦市',
        code: '450381',
    },
    {
        address: '恭城瑶族自治县',
        code: '450332',
    },
    {
        address: '梧州市',
        code: '450400',
    },
    {
        address: '梧州市市辖区',
        code: '450401',
    },
    {
        address: '万秀区',
        code: '450403',
    },
    {
        address: '长洲区',
        code: '450405',
    },
    {
        address: '龙圩区',
        code: '450406',
    },
    {
        address: '苍梧县',
        code: '450421',
    },
    {
        address: '藤县',
        code: '450422',
    },
    {
        address: '蒙山县',
        code: '450423',
    },
    {
        address: '岑溪市',
        code: '450481',
    },
    {
        address: '北海市',
        code: '450500',
    },
    {
        address: '北海市市辖区',
        code: '450501',
    },
    {
        address: '海城区',
        code: '450502',
    },
    {
        address: '银海区',
        code: '450503',
    },
    {
        address: '铁山港区',
        code: '450512',
    },
    {
        address: '合浦县',
        code: '450521',
    },
    {
        address: '防城港市',
        code: '450600',
    },
    {
        address: '防城港市市辖区',
        code: '450601',
    },
    {
        address: '港口区',
        code: '450602',
    },
    {
        address: '防城区',
        code: '450603',
    },
    {
        address: '上思县',
        code: '450621',
    },
    {
        address: '东兴市',
        code: '450681',
    },
    {
        address: '钦州市',
        code: '450700',
    },
    {
        address: '钦州市市辖区',
        code: '450701',
    },
    {
        address: '钦南区',
        code: '450702',
    },
    {
        address: '钦北区',
        code: '450703',
    },
    {
        address: '灵山县',
        code: '450721',
    },
    {
        address: '浦北县',
        code: '450722',
    },
    {
        address: '贵港市',
        code: '450800',
    },
    {
        address: '贵港市市辖区',
        code: '450801',
    },
    {
        address: '港北区',
        code: '450802',
    },
    {
        address: '港南区',
        code: '450803',
    },
    {
        address: '覃塘区',
        code: '450804',
    },
    {
        address: '平南县',
        code: '450821',
    },
    {
        address: '桂平市',
        code: '450881',
    },
    {
        address: '玉林市',
        code: '450900',
    },
    {
        address: '玉林市市辖区',
        code: '450901',
    },
    {
        address: '玉州区',
        code: '450902',
    },
    {
        address: '福绵区',
        code: '450903',
    },
    {
        address: '容县',
        code: '450921',
    },
    {
        address: '陆川县',
        code: '450922',
    },
    {
        address: '博白县',
        code: '450923',
    },
    {
        address: '兴业县',
        code: '450924',
    },
    {
        address: '北流市',
        code: '450981',
    },
    {
        address: '百色市',
        code: '451000',
    },
    {
        address: '百色市市辖区',
        code: '451001',
    },
    {
        address: '右江区',
        code: '451002',
    },
    {
        address: '田阳区',
        code: '451003',
    },
    {
        address: '田东县',
        code: '451022',
    },
    {
        address: '平果市',
        code: '451082',
    },
    {
        address: '德保县',
        code: '451024',
    },
    {
        address: '那坡县',
        code: '451026',
    },
    {
        address: '凌云县',
        code: '451027',
    },
    {
        address: '乐业县',
        code: '451028',
    },
    {
        address: '田林县',
        code: '451029',
    },
    {
        address: '西林县',
        code: '451030',
    },
    {
        address: '隆林各族自治县',
        code: '451031',
    },
    {
        address: '靖西市',
        code: '451081',
    },
    {
        address: '贺州市',
        code: '451100',
    },
    {
        address: '贺州市市辖区',
        code: '451101',
    },
    {
        address: '八步区',
        code: '451102',
    },
    {
        address: '平桂区',
        code: '451103',
    },
    {
        address: '昭平县',
        code: '451121',
    },
    {
        address: '钟山县',
        code: '451122',
    },
    {
        address: '富川瑶族自治县',
        code: '451123',
    },
    {
        address: '河池市',
        code: '451200',
    },
    {
        address: '河池市市辖区',
        code: '451201',
    },
    {
        address: '金城江区',
        code: '451202',
    },
    {
        address: '宜州区',
        code: '451203',
    },
    {
        address: '南丹县',
        code: '451221',
    },
    {
        address: '天峨县',
        code: '451222',
    },
    {
        address: '凤山县',
        code: '451223',
    },
    {
        address: '东兰县',
        code: '451224',
    },
    {
        address: '罗城仫佬族自治县',
        code: '451225',
    },
    {
        address: '环江毛南族自治县',
        code: '451226',
    },
    {
        address: '巴马瑶族自治县',
        code: '451227',
    },
    {
        address: '都安瑶族自治县',
        code: '451228',
    },
    {
        address: '大化瑶族自治县',
        code: '451229',
    },
    {
        address: '来宾市',
        code: '451300',
    },
    {
        address: '来宾市市辖区',
        code: '451301',
    },
    {
        address: '兴宾区',
        code: '451302',
    },
    {
        address: '忻城县',
        code: '451321',
    },
    {
        address: '象州县',
        code: '451322',
    },
    {
        address: '武宣县',
        code: '451323',
    },
    {
        address: '金秀瑶族自治县',
        code: '451324',
    },
    {
        address: '合山市',
        code: '451381',
    },
    {
        address: '崇左市',
        code: '451400',
    },
    {
        address: '崇左市市辖区',
        code: '451401',
    },
    {
        address: '江州区',
        code: '451402',
    },
    {
        address: '扶绥县',
        code: '451421',
    },
    {
        address: '宁明县',
        code: '451422',
    },
    {
        address: '龙州县',
        code: '451423',
    },
    {
        address: '大新县',
        code: '451424',
    },
    {
        address: '天等县',
        code: '451425',
    },
    {
        address: '凭祥市',
        code: '451481',
    },
    {
        address: '海南省',
        code: '460000',
    },
    {
        address: '海口市',
        code: '460100',
    },
    {
        address: '海口市市辖区',
        code: '460101',
    },
    {
        address: '秀英区',
        code: '460105',
    },
    {
        address: '龙华区',
        code: '460106',
    },
    {
        address: '琼山区',
        code: '460107',
    },
    {
        address: '美兰区',
        code: '460108',
    },
    {
        address: '三亚市',
        code: '460200',
    },
    {
        address: '三亚市市辖区',
        code: '460201',
    },
    {
        address: '海棠区',
        code: '460202',
    },
    {
        address: '吉阳区',
        code: '460203',
    },
    {
        address: '天涯区',
        code: '460204',
    },
    {
        address: '崖州区',
        code: '460205',
    },
    {
        address: '三沙市',
        code: '460300',
    },
    {
        address: '西沙区',
        code: '460301',
    },
    {
        address: '南沙区',
        code: '460302',
    },
    {
        address: '儋州市',
        code: '460400',
    },
    {
        address: '五指山市',
        code: '469001',
    },
    {
        address: '琼海市',
        code: '469002',
    },
    {
        address: '文昌市',
        code: '469005',
    },
    {
        address: '万宁市',
        code: '469006',
    },
    {
        address: '东方市',
        code: '469007',
    },
    {
        address: '定安县',
        code: '469021',
    },
    {
        address: '屯昌县',
        code: '469022',
    },
    {
        address: '澄迈县',
        code: '469023',
    },
    {
        address: '临高县',
        code: '469024',
    },
    {
        address: '白沙黎族自治县',
        code: '469025',
    },
    {
        address: '昌江黎族自治县',
        code: '469026',
    },
    {
        address: '乐东黎族自治县',
        code: '469027',
    },
    {
        address: '陵水黎族自治县',
        code: '469028',
    },
    {
        address: '保亭黎族苗族自治县',
        code: '469029',
    },
    {
        address: '琼中黎族苗族自治县',
        code: '469030',
    },
    {
        address: '重庆市',
        code: '500000',
    },
    {
        address: '重庆市市辖区',
        code: '500100',
    },
    {
        address: '万州区',
        code: '500101',
    },
    {
        address: '涪陵区',
        code: '500102',
    },
    {
        address: '渝中区',
        code: '500103',
    },
    {
        address: '大渡口区',
        code: '500104',
    },
    {
        address: '江北区',
        code: '500105',
    },
    {
        address: '沙坪坝区',
        code: '500106',
    },
    {
        address: '九龙坡区',
        code: '500107',
    },
    {
        address: '南岸区',
        code: '500108',
    },
    {
        address: '北碚区',
        code: '500109',
    },
    {
        address: '綦江区',
        code: '500110',
    },
    {
        address: '大足区',
        code: '500111',
    },
    {
        address: '渝北区',
        code: '500112',
    },
    {
        address: '巴南区',
        code: '500113',
    },
    {
        address: '黔江区',
        code: '500114',
    },
    {
        address: '长寿区',
        code: '500115',
    },
    {
        address: '江津区',
        code: '500116',
    },
    {
        address: '合川区',
        code: '500117',
    },
    {
        address: '永川区',
        code: '500118',
    },
    {
        address: '南川区',
        code: '500119',
    },
    {
        address: '璧山区',
        code: '500120',
    },
    {
        address: '铜梁区',
        code: '500151',
    },
    {
        address: '潼南区',
        code: '500152',
    },
    {
        address: '荣昌区',
        code: '500153',
    },
    {
        address: '开州区',
        code: '500154',
    },
    {
        address: '梁平区',
        code: '500155',
    },
    {
        address: '武隆区',
        code: '500156',
    },
    {
        address: '重庆市郊县',
        code: '500200',
    },
    {
        address: '城口县',
        code: '500229',
    },
    {
        address: '丰都县',
        code: '500230',
    },
    {
        address: '垫江县',
        code: '500231',
    },
    {
        address: '忠县',
        code: '500233',
    },
    {
        address: '云阳县',
        code: '500235',
    },
    {
        address: '奉节县',
        code: '500236',
    },
    {
        address: '巫山县',
        code: '500237',
    },
    {
        address: '巫溪县',
        code: '500238',
    },
    {
        address: '石柱土家族自治县',
        code: '500240',
    },
    {
        address: '秀山土家族苗族自治县',
        code: '500241',
    },
    {
        address: '酉阳土家族苗族自治县',
        code: '500242',
    },
    {
        address: '彭水苗族土家族自治县',
        code: '500243',
    },
    {
        address: '四川省',
        code: '510000',
    },
    {
        address: '成都市',
        code: '510100',
    },
    {
        address: '成都市市辖区',
        code: '510101',
    },
    {
        address: '锦江区',
        code: '510104',
    },
    {
        address: '青羊区',
        code: '510105',
    },
    {
        address: '金牛区',
        code: '510106',
    },
    {
        address: '武侯区',
        code: '510107',
    },
    {
        address: '成华区',
        code: '510108',
    },
    {
        address: '龙泉驿区',
        code: '510112',
    },
    {
        address: '青白江区',
        code: '510113',
    },
    {
        address: '新都区',
        code: '510114',
    },
    {
        address: '温江区',
        code: '510115',
    },
    {
        address: '双流区',
        code: '510116',
    },
    {
        address: '郫都区',
        code: '510117',
    },
    {
        address: '金堂县',
        code: '510121',
    },
    {
        address: '大邑县',
        code: '510129',
    },
    {
        address: '蒲江县',
        code: '510131',
    },
    {
        address: '新津区',
        code: '510118',
    },
    {
        address: '都江堰市',
        code: '510181',
    },
    {
        address: '彭州市',
        code: '510182',
    },
    {
        address: '邛崃市',
        code: '510183',
    },
    {
        address: '崇州市',
        code: '510184',
    },
    {
        address: '简阳市',
        code: '510185',
    },
    {
        address: '自贡市',
        code: '510300',
    },
    {
        address: '自贡市市辖区',
        code: '510301',
    },
    {
        address: '自流井区',
        code: '510302',
    },
    {
        address: '贡井区',
        code: '510303',
    },
    {
        address: '大安区',
        code: '510304',
    },
    {
        address: '沿滩区',
        code: '510311',
    },
    {
        address: '荣县',
        code: '510321',
    },
    {
        address: '富顺县',
        code: '510322',
    },
    {
        address: '攀枝花市',
        code: '510400',
    },
    {
        address: '攀枝花市市辖区',
        code: '510401',
    },
    {
        address: '东区',
        code: '510402',
    },
    {
        address: '西区',
        code: '510403',
    },
    {
        address: '仁和区',
        code: '510411',
    },
    {
        address: '米易县',
        code: '510421',
    },
    {
        address: '盐边县',
        code: '510422',
    },
    {
        address: '泸州市',
        code: '510500',
    },
    {
        address: '泸州市市辖区',
        code: '510501',
    },
    {
        address: '江阳区',
        code: '510502',
    },
    {
        address: '纳溪区',
        code: '510503',
    },
    {
        address: '龙马潭区',
        code: '510504',
    },
    {
        address: '泸县',
        code: '510521',
    },
    {
        address: '合江县',
        code: '510522',
    },
    {
        address: '叙永县',
        code: '510524',
    },
    {
        address: '古蔺县',
        code: '510525',
    },
    {
        address: '德阳市',
        code: '510600',
    },
    {
        address: '德阳市市辖区',
        code: '510601',
    },
    {
        address: '旌阳区',
        code: '510603',
    },
    {
        address: '中江县',
        code: '510623',
    },
    {
        address: '罗江区',
        code: '510604',
    },
    {
        address: '广汉市',
        code: '510681',
    },
    {
        address: '什邡市',
        code: '510682',
    },
    {
        address: '绵竹市',
        code: '510683',
    },
    {
        address: '绵阳市',
        code: '510700',
    },
    {
        address: '绵阳市市辖区',
        code: '510701',
    },
    {
        address: '涪城区',
        code: '510703',
    },
    {
        address: '游仙区',
        code: '510704',
    },
    {
        address: '安州区',
        code: '510705',
    },
    {
        address: '三台县',
        code: '510722',
    },
    {
        address: '盐亭县',
        code: '510723',
    },
    {
        address: '梓潼县',
        code: '510725',
    },
    {
        address: '北川羌族自治县',
        code: '510726',
    },
    {
        address: '平武县',
        code: '510727',
    },
    {
        address: '江油市',
        code: '510781',
    },
    {
        address: '广元市',
        code: '510800',
    },
    {
        address: '广元市市辖区',
        code: '510801',
    },
    {
        address: '利州区',
        code: '510802',
    },
    {
        address: '昭化区',
        code: '510811',
    },
    {
        address: '朝天区',
        code: '510812',
    },
    {
        address: '旺苍县',
        code: '510821',
    },
    {
        address: '青川县',
        code: '510822',
    },
    {
        address: '剑阁县',
        code: '510823',
    },
    {
        address: '苍溪县',
        code: '510824',
    },
    {
        address: '遂宁市',
        code: '510900',
    },
    {
        address: '遂宁市市辖区',
        code: '510901',
    },
    {
        address: '船山区',
        code: '510903',
    },
    {
        address: '安居区',
        code: '510904',
    },
    {
        address: '蓬溪县',
        code: '510921',
    },
    {
        address: '射洪市',
        code: '510981',
    },
    {
        address: '大英县',
        code: '510923',
    },
    {
        address: '内江市',
        code: '511000',
    },
    {
        address: '内江市市辖区',
        code: '511001',
    },
    {
        address: '市中区',
        code: '511002',
    },
    {
        address: '东兴区',
        code: '511011',
    },
    {
        address: '威远县',
        code: '511024',
    },
    {
        address: '资中县',
        code: '511025',
    },
    {
        address: '隆昌市',
        code: '511083',
    },
    {
        address: '乐山市',
        code: '511100',
    },
    {
        address: '乐山市市辖区',
        code: '511101',
    },
    {
        address: '市中区',
        code: '511102',
    },
    {
        address: '沙湾区',
        code: '511111',
    },
    {
        address: '五通桥区',
        code: '511112',
    },
    {
        address: '金口河区',
        code: '511113',
    },
    {
        address: '犍为县',
        code: '511123',
    },
    {
        address: '井研县',
        code: '511124',
    },
    {
        address: '夹江县',
        code: '511126',
    },
    {
        address: '沐川县',
        code: '511129',
    },
    {
        address: '峨边彝族自治县',
        code: '511132',
    },
    {
        address: '马边彝族自治县',
        code: '511133',
    },
    {
        address: '峨眉山市',
        code: '511181',
    },
    {
        address: '南充市',
        code: '511300',
    },
    {
        address: '南充市市辖区',
        code: '511301',
    },
    {
        address: '顺庆区',
        code: '511302',
    },
    {
        address: '高坪区',
        code: '511303',
    },
    {
        address: '嘉陵区',
        code: '511304',
    },
    {
        address: '南部县',
        code: '511321',
    },
    {
        address: '营山县',
        code: '511322',
    },
    {
        address: '蓬安县',
        code: '511323',
    },
    {
        address: '仪陇县',
        code: '511324',
    },
    {
        address: '西充县',
        code: '511325',
    },
    {
        address: '阆中市',
        code: '511381',
    },
    {
        address: '眉山市',
        code: '511400',
    },
    {
        address: '眉山市市辖区',
        code: '511401',
    },
    {
        address: '东坡区',
        code: '511402',
    },
    {
        address: '彭山区',
        code: '511403',
    },
    {
        address: '仁寿县',
        code: '511421',
    },
    {
        address: '洪雅县',
        code: '511423',
    },
    {
        address: '丹棱县',
        code: '511424',
    },
    {
        address: '青神县',
        code: '511425',
    },
    {
        address: '宜宾市',
        code: '511500',
    },
    {
        address: '宜宾市市辖区',
        code: '511501',
    },
    {
        address: '翠屏区',
        code: '511502',
    },
    {
        address: '南溪区',
        code: '511503',
    },
    {
        address: '叙州区',
        code: '511504',
    },
    {
        address: '江安县',
        code: '511523',
    },
    {
        address: '长宁县',
        code: '511524',
    },
    {
        address: '高县',
        code: '511525',
    },
    {
        address: '珙县',
        code: '511526',
    },
    {
        address: '筠连县',
        code: '511527',
    },
    {
        address: '兴文县',
        code: '511528',
    },
    {
        address: '屏山县',
        code: '511529',
    },
    {
        address: '广安市',
        code: '511600',
    },
    {
        address: '广安市市辖区',
        code: '511601',
    },
    {
        address: '广安区',
        code: '511602',
    },
    {
        address: '前锋区',
        code: '511603',
    },
    {
        address: '岳池县',
        code: '511621',
    },
    {
        address: '武胜县',
        code: '511622',
    },
    {
        address: '邻水县',
        code: '511623',
    },
    {
        address: '华蓥市',
        code: '511681',
    },
    {
        address: '达州市',
        code: '511700',
    },
    {
        address: '达州市市辖区',
        code: '511701',
    },
    {
        address: '通川区',
        code: '511702',
    },
    {
        address: '达川区',
        code: '511703',
    },
    {
        address: '宣汉县',
        code: '511722',
    },
    {
        address: '开江县',
        code: '511723',
    },
    {
        address: '大竹县',
        code: '511724',
    },
    {
        address: '渠县',
        code: '511725',
    },
    {
        address: '万源市',
        code: '511781',
    },
    {
        address: '雅安市',
        code: '511800',
    },
    {
        address: '雅安市市辖区',
        code: '511801',
    },
    {
        address: '雨城区',
        code: '511802',
    },
    {
        address: '名山区',
        code: '511803',
    },
    {
        address: '荥经县',
        code: '511822',
    },
    {
        address: '汉源县',
        code: '511823',
    },
    {
        address: '石棉县',
        code: '511824',
    },
    {
        address: '天全县',
        code: '511825',
    },
    {
        address: '芦山县',
        code: '511826',
    },
    {
        address: '宝兴县',
        code: '511827',
    },
    {
        address: '巴中市',
        code: '511900',
    },
    {
        address: '巴中市市辖区',
        code: '511901',
    },
    {
        address: '巴州区',
        code: '511902',
    },
    {
        address: '恩阳区',
        code: '511903',
    },
    {
        address: '通江县',
        code: '511921',
    },
    {
        address: '南江县',
        code: '511922',
    },
    {
        address: '平昌县',
        code: '511923',
    },
    {
        address: '资阳市',
        code: '512000',
    },
    {
        address: '资阳市市辖区',
        code: '512001',
    },
    {
        address: '雁江区',
        code: '512002',
    },
    {
        address: '安岳县',
        code: '512021',
    },
    {
        address: '乐至县',
        code: '512022',
    },
    {
        address: '阿坝藏族羌族自治州',
        code: '513200',
    },
    {
        address: '马尔康市',
        code: '513201',
    },
    {
        address: '汶川县',
        code: '513221',
    },
    {
        address: '理县',
        code: '513222',
    },
    {
        address: '茂县',
        code: '513223',
    },
    {
        address: '松潘县',
        code: '513224',
    },
    {
        address: '九寨沟县',
        code: '513225',
    },
    {
        address: '金川县',
        code: '513226',
    },
    {
        address: '小金县',
        code: '513227',
    },
    {
        address: '黑水县',
        code: '513228',
    },
    {
        address: '壤塘县',
        code: '513230',
    },
    {
        address: '阿坝县',
        code: '513231',
    },
    {
        address: '若尔盖县',
        code: '513232',
    },
    {
        address: '红原县',
        code: '513233',
    },
    {
        address: '甘孜藏族自治州',
        code: '513300',
    },
    {
        address: '康定市',
        code: '513301',
    },
    {
        address: '泸定县',
        code: '513322',
    },
    {
        address: '丹巴县',
        code: '513323',
    },
    {
        address: '九龙县',
        code: '513324',
    },
    {
        address: '雅江县',
        code: '513325',
    },
    {
        address: '道孚县',
        code: '513326',
    },
    {
        address: '炉霍县',
        code: '513327',
    },
    {
        address: '甘孜县',
        code: '513328',
    },
    {
        address: '新龙县',
        code: '513329',
    },
    {
        address: '德格县',
        code: '513330',
    },
    {
        address: '白玉县',
        code: '513331',
    },
    {
        address: '石渠县',
        code: '513332',
    },
    {
        address: '色达县',
        code: '513333',
    },
    {
        address: '理塘县',
        code: '513334',
    },
    {
        address: '巴塘县',
        code: '513335',
    },
    {
        address: '乡城县',
        code: '513336',
    },
    {
        address: '稻城县',
        code: '513337',
    },
    {
        address: '得荣县',
        code: '513338',
    },
    {
        address: '凉山彝族自治州',
        code: '513400',
    },
    {
        address: '西昌市',
        code: '513401',
    },
    {
        address: '木里藏族自治县',
        code: '513422',
    },
    {
        address: '盐源县',
        code: '513423',
    },
    {
        address: '德昌县',
        code: '513424',
    },
    {
        address: '会理县',
        code: '513425',
    },
    {
        address: '会东县',
        code: '513426',
    },
    {
        address: '宁南县',
        code: '513427',
    },
    {
        address: '普格县',
        code: '513428',
    },
    {
        address: '布拖县',
        code: '513429',
    },
    {
        address: '金阳县',
        code: '513430',
    },
    {
        address: '昭觉县',
        code: '513431',
    },
    {
        address: '喜德县',
        code: '513432',
    },
    {
        address: '冕宁县',
        code: '513433',
    },
    {
        address: '越西县',
        code: '513434',
    },
    {
        address: '甘洛县',
        code: '513435',
    },
    {
        address: '美姑县',
        code: '513436',
    },
    {
        address: '雷波县',
        code: '513437',
    },
    {
        address: '贵州省',
        code: '520000',
    },
    {
        address: '贵阳市',
        code: '520100',
    },
    {
        address: '贵阳市市辖区',
        code: '520101',
    },
    {
        address: '南明区',
        code: '520102',
    },
    {
        address: '云岩区',
        code: '520103',
    },
    {
        address: '花溪区',
        code: '520111',
    },
    {
        address: '乌当区',
        code: '520112',
    },
    {
        address: '白云区',
        code: '520113',
    },
    {
        address: '观山湖区',
        code: '520115',
    },
    {
        address: '开阳县',
        code: '520121',
    },
    {
        address: '息烽县',
        code: '520122',
    },
    {
        address: '修文县',
        code: '520123',
    },
    {
        address: '清镇市',
        code: '520181',
    },
    {
        address: '六盘水市',
        code: '520200',
    },
    {
        address: '钟山区',
        code: '520201',
    },
    {
        address: '六枝特区',
        code: '520203',
    },
    {
        address: '水城区',
        code: '520221',
    },
    {
        address: '盘州市',
        code: '520281',
    },
    {
        address: '遵义市',
        code: '520300',
    },
    {
        address: '遵义市市辖区',
        code: '520301',
    },
    {
        address: '红花岗区',
        code: '520302',
    },
    {
        address: '汇川区',
        code: '520303',
    },
    {
        address: '播州区',
        code: '520304',
    },
    {
        address: '桐梓县',
        code: '520322',
    },
    {
        address: '绥阳县',
        code: '520323',
    },
    {
        address: '正安县',
        code: '520324',
    },
    {
        address: '道真仡佬族苗族自治县',
        code: '520325',
    },
    {
        address: '务川仡佬族苗族自治县',
        code: '520326',
    },
    {
        address: '凤冈县',
        code: '520327',
    },
    {
        address: '湄潭县',
        code: '520328',
    },
    {
        address: '余庆县',
        code: '520329',
    },
    {
        address: '习水县',
        code: '520330',
    },
    {
        address: '赤水市',
        code: '520381',
    },
    {
        address: '仁怀市',
        code: '520382',
    },
    {
        address: '安顺市',
        code: '520400',
    },
    {
        address: '安顺市市辖区',
        code: '520401',
    },
    {
        address: '西秀区',
        code: '520402',
    },
    {
        address: '平坝区',
        code: '520403',
    },
    {
        address: '普定县',
        code: '520422',
    },
    {
        address: '镇宁布依族苗族自治县',
        code: '520423',
    },
    {
        address: '关岭布依族苗族自治县',
        code: '520424',
    },
    {
        address: '紫云苗族布依族自治县',
        code: '520425',
    },
    {
        address: '毕节市',
        code: '520500',
    },
    {
        address: '七星关区',
        code: '520502',
    },
    {
        address: '大方县',
        code: '520521',
    },
    {
        address: '黔西市',
        code: '520522',
    },
    {
        address: '金沙县',
        code: '520523',
    },
    {
        address: '织金县',
        code: '520524',
    },
    {
        address: '纳雍县',
        code: '520525',
    },
    {
        address: '威宁彝族回族苗族自治县',
        code: '520526',
    },
    {
        address: '赫章县',
        code: '520527',
    },
    {
        address: '铜仁市',
        code: '520600',
    },
    {
        address: '碧江区',
        code: '520602',
    },
    {
        address: '万山区',
        code: '520603',
    },
    {
        address: '江口县',
        code: '520621',
    },
    {
        address: '玉屏侗族自治县',
        code: '520622',
    },
    {
        address: '石阡县',
        code: '520623',
    },
    {
        address: '思南县',
        code: '520624',
    },
    {
        address: '印江土家族苗族自治县',
        code: '520625',
    },
    {
        address: '德江县',
        code: '520626',
    },
    {
        address: '沿河土家族自治县',
        code: '520627',
    },
    {
        address: '松桃苗族自治县',
        code: '520628',
    },
    {
        address: '黔西南布依族苗族自治州',
        code: '522300',
    },
    {
        address: '兴义市',
        code: '522301',
    },
    {
        address: '兴仁市',
        code: '522302',
    },
    {
        address: '普安县',
        code: '522323',
    },
    {
        address: '晴隆县',
        code: '522324',
    },
    {
        address: '贞丰县',
        code: '522325',
    },
    {
        address: '望谟县',
        code: '522326',
    },
    {
        address: '册亨县',
        code: '522327',
    },
    {
        address: '安龙县',
        code: '522328',
    },
    {
        address: '黔东南苗族侗族自治州',
        code: '522600',
    },
    {
        address: '凯里市',
        code: '522601',
    },
    {
        address: '黄平县',
        code: '522622',
    },
    {
        address: '施秉县',
        code: '522623',
    },
    {
        address: '三穗县',
        code: '522624',
    },
    {
        address: '镇远县',
        code: '522625',
    },
    {
        address: '岑巩县',
        code: '522626',
    },
    {
        address: '天柱县',
        code: '522627',
    },
    {
        address: '锦屏县',
        code: '522628',
    },
    {
        address: '剑河县',
        code: '522629',
    },
    {
        address: '台江县',
        code: '522630',
    },
    {
        address: '黎平县',
        code: '522631',
    },
    {
        address: '榕江县',
        code: '522632',
    },
    {
        address: '从江县',
        code: '522633',
    },
    {
        address: '雷山县',
        code: '522634',
    },
    {
        address: '麻江县',
        code: '522635',
    },
    {
        address: '丹寨县',
        code: '522636',
    },
    {
        address: '黔南布依族苗族自治州',
        code: '522700',
    },
    {
        address: '都匀市',
        code: '522701',
    },
    {
        address: '福泉市',
        code: '522702',
    },
    {
        address: '荔波县',
        code: '522722',
    },
    {
        address: '贵定县',
        code: '522723',
    },
    {
        address: '瓮安县',
        code: '522725',
    },
    {
        address: '独山县',
        code: '522726',
    },
    {
        address: '平塘县',
        code: '522727',
    },
    {
        address: '罗甸县',
        code: '522728',
    },
    {
        address: '长顺县',
        code: '522729',
    },
    {
        address: '龙里县',
        code: '522730',
    },
    {
        address: '惠水县',
        code: '522731',
    },
    {
        address: '三都水族自治县',
        code: '522732',
    },
    {
        address: '云南省',
        code: '530000',
    },
    {
        address: '昆明市',
        code: '530100',
    },
    {
        address: '昆明市市辖区',
        code: '530101',
    },
    {
        address: '五华区',
        code: '530102',
    },
    {
        address: '盘龙区',
        code: '530103',
    },
    {
        address: '官渡区',
        code: '530111',
    },
    {
        address: '西山区',
        code: '530112',
    },
    {
        address: '东川区',
        code: '530113',
    },
    {
        address: '呈贡区',
        code: '530114',
    },
    {
        address: '晋宁区',
        code: '530115',
    },
    {
        address: '富民县',
        code: '530124',
    },
    {
        address: '宜良县',
        code: '530125',
    },
    {
        address: '石林彝族自治县',
        code: '530126',
    },
    {
        address: '嵩明县',
        code: '530127',
    },
    {
        address: '禄劝彝族苗族自治县',
        code: '530128',
    },
    {
        address: '寻甸回族彝族自治县',
        code: '530129',
    },
    {
        address: '安宁市',
        code: '530181',
    },
    {
        address: '曲靖市',
        code: '530300',
    },
    {
        address: '曲靖市市辖区',
        code: '530301',
    },
    {
        address: '麒麟区',
        code: '530302',
    },
    {
        address: '沾益区',
        code: '530303',
    },
    {
        address: '马龙区',
        code: '530304',
    },
    {
        address: '陆良县',
        code: '530322',
    },
    {
        address: '师宗县',
        code: '530323',
    },
    {
        address: '罗平县',
        code: '530324',
    },
    {
        address: '富源县',
        code: '530325',
    },
    {
        address: '会泽县',
        code: '530326',
    },
    {
        address: '宣威市',
        code: '530381',
    },
    {
        address: '玉溪市',
        code: '530400',
    },
    {
        address: '玉溪市市辖区',
        code: '530401',
    },
    {
        address: '红塔区',
        code: '530402',
    },
    {
        address: '江川区',
        code: '530403',
    },
    {
        address: '澄江市',
        code: '530481',
    },
    {
        address: '通海县',
        code: '530423',
    },
    {
        address: '华宁县',
        code: '530424',
    },
    {
        address: '易门县',
        code: '530425',
    },
    {
        address: '峨山彝族自治县',
        code: '530426',
    },
    {
        address: '新平彝族傣族自治县',
        code: '530427',
    },
    {
        address: '元江哈尼族彝族傣族自治县',
        code: '530428',
    },
    {
        address: '保山市',
        code: '530500',
    },
    {
        address: '保山市市辖区',
        code: '530501',
    },
    {
        address: '隆阳区',
        code: '530502',
    },
    {
        address: '施甸县',
        code: '530521',
    },
    {
        address: '龙陵县',
        code: '530523',
    },
    {
        address: '昌宁县',
        code: '530524',
    },
    {
        address: '腾冲市',
        code: '530581',
    },
    {
        address: '昭通市',
        code: '530600',
    },
    {
        address: '昭通市市辖区',
        code: '530601',
    },
    {
        address: '昭阳区',
        code: '530602',
    },
    {
        address: '鲁甸县',
        code: '530621',
    },
    {
        address: '巧家县',
        code: '530622',
    },
    {
        address: '盐津县',
        code: '530623',
    },
    {
        address: '大关县',
        code: '530624',
    },
    {
        address: '永善县',
        code: '530625',
    },
    {
        address: '绥江县',
        code: '530626',
    },
    {
        address: '镇雄县',
        code: '530627',
    },
    {
        address: '彝良县',
        code: '530628',
    },
    {
        address: '威信县',
        code: '530629',
    },
    {
        address: '水富市',
        code: '530681',
    },
    {
        address: '丽江市',
        code: '530700',
    },
    {
        address: '丽江市市辖区',
        code: '530701',
    },
    {
        address: '古城区',
        code: '530702',
    },
    {
        address: '玉龙纳西族自治县',
        code: '530721',
    },
    {
        address: '永胜县',
        code: '530722',
    },
    {
        address: '华坪县',
        code: '530723',
    },
    {
        address: '宁蒗彝族自治县',
        code: '530724',
    },
    {
        address: '普洱市',
        code: '530800',
    },
    {
        address: '普洱市市辖区',
        code: '530801',
    },
    {
        address: '思茅区',
        code: '530802',
    },
    {
        address: '宁洱哈尼族彝族自治县',
        code: '530821',
    },
    {
        address: '墨江哈尼族自治县',
        code: '530822',
    },
    {
        address: '景东彝族自治县',
        code: '530823',
    },
    {
        address: '景谷傣族彝族自治县',
        code: '530824',
    },
    {
        address: '镇沅彝族哈尼族拉祜族自治县',
        code: '530825',
    },
    {
        address: '江城哈尼族彝族自治县',
        code: '530826',
    },
    {
        address: '孟连傣族拉祜族佤族自治县',
        code: '530827',
    },
    {
        address: '澜沧拉祜族自治县',
        code: '530828',
    },
    {
        address: '西盟佤族自治县',
        code: '530829',
    },
    {
        address: '临沧市',
        code: '530900',
    },
    {
        address: '临沧市市辖区',
        code: '530901',
    },
    {
        address: '临翔区',
        code: '530902',
    },
    {
        address: '凤庆县',
        code: '530921',
    },
    {
        address: '云县',
        code: '530922',
    },
    {
        address: '永德县',
        code: '530923',
    },
    {
        address: '镇康县',
        code: '530924',
    },
    {
        address: '双江拉祜族佤族布朗族傣族自治县',
        code: '530925',
    },
    {
        address: '耿马傣族佤族自治县',
        code: '530926',
    },
    {
        address: '沧源佤族自治县',
        code: '530927',
    },
    {
        address: '楚雄彝族自治州',
        code: '532300',
    },
    {
        address: '楚雄市',
        code: '532301',
    },
    {
        address: '双柏县',
        code: '532322',
    },
    {
        address: '牟定县',
        code: '532323',
    },
    {
        address: '南华县',
        code: '532324',
    },
    {
        address: '姚安县',
        code: '532325',
    },
    {
        address: '大姚县',
        code: '532326',
    },
    {
        address: '永仁县',
        code: '532327',
    },
    {
        address: '元谋县',
        code: '532328',
    },
    {
        address: '武定县',
        code: '532329',
    },
    {
        address: '禄丰县',
        code: '532331',
    },
    {
        address: '红河哈尼族彝族自治州',
        code: '532500',
    },
    {
        address: '个旧市',
        code: '532501',
    },
    {
        address: '开远市',
        code: '532502',
    },
    {
        address: '蒙自市',
        code: '532503',
    },
    {
        address: '弥勒市',
        code: '532504',
    },
    {
        address: '屏边苗族自治县',
        code: '532523',
    },
    {
        address: '建水县',
        code: '532524',
    },
    {
        address: '石屏县',
        code: '532525',
    },
    {
        address: '泸西县',
        code: '532527',
    },
    {
        address: '元阳县',
        code: '532528',
    },
    {
        address: '红河县',
        code: '532529',
    },
    {
        address: '金平苗族瑶族傣族自治县',
        code: '532530',
    },
    {
        address: '绿春县',
        code: '532531',
    },
    {
        address: '河口瑶族自治县',
        code: '532532',
    },
    {
        address: '文山壮族苗族自治州',
        code: '532600',
    },
    {
        address: '文山市',
        code: '532601',
    },
    {
        address: '砚山县',
        code: '532622',
    },
    {
        address: '西畴县',
        code: '532623',
    },
    {
        address: '麻栗坡县',
        code: '532624',
    },
    {
        address: '马关县',
        code: '532625',
    },
    {
        address: '丘北县',
        code: '532626',
    },
    {
        address: '广南县',
        code: '532627',
    },
    {
        address: '富宁县',
        code: '532628',
    },
    {
        address: '西双版纳傣族自治州',
        code: '532800',
    },
    {
        address: '景洪市',
        code: '532801',
    },
    {
        address: '勐海县',
        code: '532822',
    },
    {
        address: '勐腊县',
        code: '532823',
    },
    {
        address: '大理白族自治州',
        code: '532900',
    },
    {
        address: '大理市',
        code: '532901',
    },
    {
        address: '漾濞彝族自治县',
        code: '532922',
    },
    {
        address: '祥云县',
        code: '532923',
    },
    {
        address: '宾川县',
        code: '532924',
    },
    {
        address: '弥渡县',
        code: '532925',
    },
    {
        address: '南涧彝族自治县',
        code: '532926',
    },
    {
        address: '巍山彝族回族自治县',
        code: '532927',
    },
    {
        address: '永平县',
        code: '532928',
    },
    {
        address: '云龙县',
        code: '532929',
    },
    {
        address: '洱源县',
        code: '532930',
    },
    {
        address: '剑川县',
        code: '532931',
    },
    {
        address: '鹤庆县',
        code: '532932',
    },
    {
        address: '德宏傣族景颇族自治州',
        code: '533100',
    },
    {
        address: '瑞丽市',
        code: '533102',
    },
    {
        address: '芒市',
        code: '533103',
    },
    {
        address: '梁河县',
        code: '533122',
    },
    {
        address: '盈江县',
        code: '533123',
    },
    {
        address: '陇川县',
        code: '533124',
    },
    {
        address: '怒江傈僳族自治州',
        code: '533300',
    },
    {
        address: '泸水市',
        code: '533301',
    },
    {
        address: '福贡县',
        code: '533323',
    },
    {
        address: '贡山独龙族怒族自治县',
        code: '533324',
    },
    {
        address: '兰坪白族普米族自治县',
        code: '533325',
    },
    {
        address: '迪庆藏族自治州',
        code: '533400',
    },
    {
        address: '香格里拉市',
        code: '533401',
    },
    {
        address: '德钦县',
        code: '533422',
    },
    {
        address: '维西傈僳族自治县',
        code: '533423',
    },
    {
        address: '西藏自治区',
        code: '540000',
    },
    {
        address: '拉萨市',
        code: '540100',
    },
    {
        address: '拉萨市市辖区',
        code: '540101',
    },
    {
        address: '城关区',
        code: '540102',
    },
    {
        address: '堆龙德庆区',
        code: '540103',
    },
    {
        address: '达孜区',
        code: '540104',
    },
    {
        address: '林周县',
        code: '540121',
    },
    {
        address: '当雄县',
        code: '540122',
    },
    {
        address: '尼木县',
        code: '540123',
    },
    {
        address: '曲水县',
        code: '540124',
    },
    {
        address: '墨竹工卡县',
        code: '540127',
    },
    {
        address: '日喀则市',
        code: '540200',
    },
    {
        address: '桑珠孜区',
        code: '540202',
    },
    {
        address: '南木林县',
        code: '540221',
    },
    {
        address: '江孜县',
        code: '540222',
    },
    {
        address: '定日县',
        code: '540223',
    },
    {
        address: '萨迦县',
        code: '540224',
    },
    {
        address: '拉孜县',
        code: '540225',
    },
    {
        address: '昂仁县',
        code: '540226',
    },
    {
        address: '谢通门县',
        code: '540227',
    },
    {
        address: '白朗县',
        code: '540228',
    },
    {
        address: '仁布县',
        code: '540229',
    },
    {
        address: '康马县',
        code: '540230',
    },
    {
        address: '定结县',
        code: '540231',
    },
    {
        address: '仲巴县',
        code: '540232',
    },
    {
        address: '亚东县',
        code: '540233',
    },
    {
        address: '吉隆县',
        code: '540234',
    },
    {
        address: '聂拉木县',
        code: '540235',
    },
    {
        address: '萨嘎县',
        code: '540236',
    },
    {
        address: '岗巴县',
        code: '540237',
    },
    {
        address: '昌都市',
        code: '540300',
    },
    {
        address: '卡若区',
        code: '540302',
    },
    {
        address: '江达县',
        code: '540321',
    },
    {
        address: '贡觉县',
        code: '540322',
    },
    {
        address: '类乌齐县',
        code: '540323',
    },
    {
        address: '丁青县',
        code: '540324',
    },
    {
        address: '察雅县',
        code: '540325',
    },
    {
        address: '八宿县',
        code: '540326',
    },
    {
        address: '左贡县',
        code: '540327',
    },
    {
        address: '芒康县',
        code: '540328',
    },
    {
        address: '洛隆县',
        code: '540329',
    },
    {
        address: '边坝县',
        code: '540330',
    },
    {
        address: '林芝市',
        code: '540400',
    },
    {
        address: '巴宜区',
        code: '540402',
    },
    {
        address: '工布江达县',
        code: '540421',
    },
    {
        address: '米林县',
        code: '540422',
    },
    {
        address: '墨脱县',
        code: '540423',
    },
    {
        address: '波密县',
        code: '540424',
    },
    {
        address: '察隅县',
        code: '540425',
    },
    {
        address: '朗县',
        code: '540426',
    },
    {
        address: '山南市',
        code: '540500',
    },
    {
        address: '乃东区',
        code: '540502',
    },
    {
        address: '扎囊县',
        code: '540521',
    },
    {
        address: '贡嘎县',
        code: '540522',
    },
    {
        address: '桑日县',
        code: '540523',
    },
    {
        address: '琼结县',
        code: '540524',
    },
    {
        address: '曲松县',
        code: '540525',
    },
    {
        address: '措美县',
        code: '540526',
    },
    {
        address: '洛扎县',
        code: '540527',
    },
    {
        address: '加查县',
        code: '540528',
    },
    {
        address: '隆子县',
        code: '540529',
    },
    {
        address: '错那县',
        code: '540530',
    },
    {
        address: '浪卡子县',
        code: '540531',
    },
    {
        address: '那曲市',
        code: '540600',
    },
    {
        address: '色尼区',
        code: '540602',
    },
    {
        address: '嘉黎县',
        code: '540621',
    },
    {
        address: '比如县',
        code: '540622',
    },
    {
        address: '聂荣县',
        code: '540623',
    },
    {
        address: '安多县',
        code: '540624',
    },
    {
        address: '申扎县',
        code: '540625',
    },
    {
        address: '索县',
        code: '540626',
    },
    {
        address: '班戈县',
        code: '540627',
    },
    {
        address: '巴青县',
        code: '540628',
    },
    {
        address: '尼玛县',
        code: '540629',
    },
    {
        address: '双湖县',
        code: '540630',
    },
    {
        address: '阿里地区',
        code: '542500',
    },
    {
        address: '普兰县',
        code: '542521',
    },
    {
        address: '札达县',
        code: '542522',
    },
    {
        address: '噶尔县',
        code: '542523',
    },
    {
        address: '日土县',
        code: '542524',
    },
    {
        address: '革吉县',
        code: '542525',
    },
    {
        address: '改则县',
        code: '542526',
    },
    {
        address: '措勤县',
        code: '542527',
    },
    {
        address: '陕西省',
        code: '610000',
    },
    {
        address: '西安市',
        code: '610100',
    },
    {
        address: '西安市市辖区',
        code: '610101',
    },
    {
        address: '新城区',
        code: '610102',
    },
    {
        address: '碑林区',
        code: '610103',
    },
    {
        address: '莲湖区',
        code: '610104',
    },
    {
        address: '灞桥区',
        code: '610111',
    },
    {
        address: '未央区',
        code: '610112',
    },
    {
        address: '雁塔区',
        code: '610113',
    },
    {
        address: '阎良区',
        code: '610114',
    },
    {
        address: '临潼区',
        code: '610115',
    },
    {
        address: '长安区',
        code: '610116',
    },
    {
        address: '高陵区',
        code: '610117',
    },
    {
        address: '鄠邑区',
        code: '610118',
    },
    {
        address: '蓝田县',
        code: '610122',
    },
    {
        address: '周至县',
        code: '610124',
    },
    {
        address: '铜川市',
        code: '610200',
    },
    {
        address: '铜川市市辖区',
        code: '610201',
    },
    {
        address: '王益区',
        code: '610202',
    },
    {
        address: '印台区',
        code: '610203',
    },
    {
        address: '耀州区',
        code: '610204',
    },
    {
        address: '宜君县',
        code: '610222',
    },
    {
        address: '宝鸡市',
        code: '610300',
    },
    {
        address: '宝鸡市市辖区',
        code: '610301',
    },
    {
        address: '渭滨区',
        code: '610302',
    },
    {
        address: '金台区',
        code: '610303',
    },
    {
        address: '陈仓区',
        code: '610304',
    },
    {
        address: '凤翔县',
        code: '610322',
    },
    {
        address: '岐山县',
        code: '610323',
    },
    {
        address: '扶风县',
        code: '610324',
    },
    {
        address: '眉县',
        code: '610326',
    },
    {
        address: '陇县',
        code: '610327',
    },
    {
        address: '千阳县',
        code: '610328',
    },
    {
        address: '麟游县',
        code: '610329',
    },
    {
        address: '凤县',
        code: '610330',
    },
    {
        address: '太白县',
        code: '610331',
    },
    {
        address: '咸阳市',
        code: '610400',
    },
    {
        address: '咸阳市市辖区',
        code: '610401',
    },
    {
        address: '秦都区',
        code: '610402',
    },
    {
        address: '杨陵区',
        code: '610403',
    },
    {
        address: '渭城区',
        code: '610404',
    },
    {
        address: '三原县',
        code: '610422',
    },
    {
        address: '泾阳县',
        code: '610423',
    },
    {
        address: '乾县',
        code: '610424',
    },
    {
        address: '礼泉县',
        code: '610425',
    },
    {
        address: '永寿县',
        code: '610426',
    },
    {
        address: '彬州市',
        code: '610482',
    },
    {
        address: '长武县',
        code: '610428',
    },
    {
        address: '旬邑县',
        code: '610429',
    },
    {
        address: '淳化县',
        code: '610430',
    },
    {
        address: '武功县',
        code: '610431',
    },
    {
        address: '兴平市',
        code: '610481',
    },
    {
        address: '渭南市',
        code: '610500',
    },
    {
        address: '渭南市市辖区',
        code: '610501',
    },
    {
        address: '临渭区',
        code: '610502',
    },
    {
        address: '华州区',
        code: '610503',
    },
    {
        address: '潼关县',
        code: '610522',
    },
    {
        address: '大荔县',
        code: '610523',
    },
    {
        address: '合阳县',
        code: '610524',
    },
    {
        address: '澄城县',
        code: '610525',
    },
    {
        address: '蒲城县',
        code: '610526',
    },
    {
        address: '白水县',
        code: '610527',
    },
    {
        address: '富平县',
        code: '610528',
    },
    {
        address: '韩城市',
        code: '610581',
    },
    {
        address: '华阴市',
        code: '610582',
    },
    {
        address: '延安市',
        code: '610600',
    },
    {
        address: '延安市市辖区',
        code: '610601',
    },
    {
        address: '宝塔区',
        code: '610602',
    },
    {
        address: '安塞区',
        code: '610603',
    },
    {
        address: '延长县',
        code: '610621',
    },
    {
        address: '延川县',
        code: '610622',
    },
    {
        address: '子长市',
        code: '610681',
    },
    {
        address: '志丹县',
        code: '610625',
    },
    {
        address: '吴起县',
        code: '610626',
    },
    {
        address: '甘泉县',
        code: '610627',
    },
    {
        address: '富县',
        code: '610628',
    },
    {
        address: '洛川县',
        code: '610629',
    },
    {
        address: '宜川县',
        code: '610630',
    },
    {
        address: '黄龙县',
        code: '610631',
    },
    {
        address: '黄陵县',
        code: '610632',
    },
    {
        address: '汉中市',
        code: '610700',
    },
    {
        address: '汉中市市辖区',
        code: '610701',
    },
    {
        address: '汉台区',
        code: '610702',
    },
    {
        address: '南郑区',
        code: '610703',
    },
    {
        address: '城固县',
        code: '610722',
    },
    {
        address: '洋县',
        code: '610723',
    },
    {
        address: '西乡县',
        code: '610724',
    },
    {
        address: '勉县',
        code: '610725',
    },
    {
        address: '宁强县',
        code: '610726',
    },
    {
        address: '略阳县',
        code: '610727',
    },
    {
        address: '镇巴县',
        code: '610728',
    },
    {
        address: '留坝县',
        code: '610729',
    },
    {
        address: '佛坪县',
        code: '610730',
    },
    {
        address: '榆林市',
        code: '610800',
    },
    {
        address: '榆林市市辖区',
        code: '610801',
    },
    {
        address: '榆阳区',
        code: '610802',
    },
    {
        address: '横山区',
        code: '610803',
    },
    {
        address: '府谷县',
        code: '610822',
    },
    {
        address: '靖边县',
        code: '610824',
    },
    {
        address: '定边县',
        code: '610825',
    },
    {
        address: '绥德县',
        code: '610826',
    },
    {
        address: '米脂县',
        code: '610827',
    },
    {
        address: '佳县',
        code: '610828',
    },
    {
        address: '吴堡县',
        code: '610829',
    },
    {
        address: '清涧县',
        code: '610830',
    },
    {
        address: '子洲县',
        code: '610831',
    },
    {
        address: '神木市',
        code: '610881',
    },
    {
        address: '安康市',
        code: '610900',
    },
    {
        address: '安康市市辖区',
        code: '610901',
    },
    {
        address: '汉滨区',
        code: '610902',
    },
    {
        address: '汉阴县',
        code: '610921',
    },
    {
        address: '石泉县',
        code: '610922',
    },
    {
        address: '宁陕县',
        code: '610923',
    },
    {
        address: '紫阳县',
        code: '610924',
    },
    {
        address: '岚皋县',
        code: '610925',
    },
    {
        address: '平利县',
        code: '610926',
    },
    {
        address: '镇坪县',
        code: '610927',
    },
    {
        address: '旬阳县',
        code: '610928',
    },
    {
        address: '白河县',
        code: '610929',
    },
    {
        address: '商洛市',
        code: '611000',
    },
    {
        address: '商洛市市辖区',
        code: '611001',
    },
    {
        address: '商州区',
        code: '611002',
    },
    {
        address: '洛南县',
        code: '611021',
    },
    {
        address: '丹凤县',
        code: '611022',
    },
    {
        address: '商南县',
        code: '611023',
    },
    {
        address: '山阳县',
        code: '611024',
    },
    {
        address: '镇安县',
        code: '611025',
    },
    {
        address: '柞水县',
        code: '611026',
    },
    {
        address: '甘肃省',
        code: '620000',
    },
    {
        address: '兰州市',
        code: '620100',
    },
    {
        address: '兰州市市辖区',
        code: '620101',
    },
    {
        address: '城关区',
        code: '620102',
    },
    {
        address: '七里河区',
        code: '620103',
    },
    {
        address: '西固区',
        code: '620104',
    },
    {
        address: '安宁区',
        code: '620105',
    },
    {
        address: '红古区',
        code: '620111',
    },
    {
        address: '永登县',
        code: '620121',
    },
    {
        address: '皋兰县',
        code: '620122',
    },
    {
        address: '榆中县',
        code: '620123',
    },
    {
        address: '嘉峪关市',
        code: '620200',
    },
    {
        address: '嘉峪关市市辖区',
        code: '620201',
    },
    {
        address: '金昌市',
        code: '620300',
    },
    {
        address: '金昌市市辖区',
        code: '620301',
    },
    {
        address: '金川区',
        code: '620302',
    },
    {
        address: '永昌县',
        code: '620321',
    },
    {
        address: '白银市',
        code: '620400',
    },
    {
        address: '白银市市辖区',
        code: '620401',
    },
    {
        address: '白银区',
        code: '620402',
    },
    {
        address: '平川区',
        code: '620403',
    },
    {
        address: '靖远县',
        code: '620421',
    },
    {
        address: '会宁县',
        code: '620422',
    },
    {
        address: '景泰县',
        code: '620423',
    },
    {
        address: '天水市',
        code: '620500',
    },
    {
        address: '天水市市辖区',
        code: '620501',
    },
    {
        address: '秦州区',
        code: '620502',
    },
    {
        address: '麦积区',
        code: '620503',
    },
    {
        address: '清水县',
        code: '620521',
    },
    {
        address: '秦安县',
        code: '620522',
    },
    {
        address: '甘谷县',
        code: '620523',
    },
    {
        address: '武山县',
        code: '620524',
    },
    {
        address: '张家川回族自治县',
        code: '620525',
    },
    {
        address: '武威市',
        code: '620600',
    },
    {
        address: '武威市市辖区',
        code: '620601',
    },
    {
        address: '凉州区',
        code: '620602',
    },
    {
        address: '民勤县',
        code: '620621',
    },
    {
        address: '古浪县',
        code: '620622',
    },
    {
        address: '天祝藏族自治县',
        code: '620623',
    },
    {
        address: '张掖市',
        code: '620700',
    },
    {
        address: '张掖市市辖区',
        code: '620701',
    },
    {
        address: '甘州区',
        code: '620702',
    },
    {
        address: '肃南裕固族自治县',
        code: '620721',
    },
    {
        address: '民乐县',
        code: '620722',
    },
    {
        address: '临泽县',
        code: '620723',
    },
    {
        address: '高台县',
        code: '620724',
    },
    {
        address: '山丹县',
        code: '620725',
    },
    {
        address: '平凉市',
        code: '620800',
    },
    {
        address: '平凉市市辖区',
        code: '620801',
    },
    {
        address: '崆峒区',
        code: '620802',
    },
    {
        address: '泾川县',
        code: '620821',
    },
    {
        address: '灵台县',
        code: '620822',
    },
    {
        address: '崇信县',
        code: '620823',
    },
    {
        address: '华亭市',
        code: '620881',
    },
    {
        address: '庄浪县',
        code: '620825',
    },
    {
        address: '静宁县',
        code: '620826',
    },
    {
        address: '酒泉市',
        code: '620900',
    },
    {
        address: '酒泉市市辖区',
        code: '620901',
    },
    {
        address: '肃州区',
        code: '620902',
    },
    {
        address: '金塔县',
        code: '620921',
    },
    {
        address: '瓜州县',
        code: '620922',
    },
    {
        address: '肃北蒙古族自治县',
        code: '620923',
    },
    {
        address: '阿克塞哈萨克族自治县',
        code: '620924',
    },
    {
        address: '玉门市',
        code: '620981',
    },
    {
        address: '敦煌市',
        code: '620982',
    },
    {
        address: '庆阳市',
        code: '621000',
    },
    {
        address: '庆阳市市辖区',
        code: '621001',
    },
    {
        address: '西峰区',
        code: '621002',
    },
    {
        address: '庆城县',
        code: '621021',
    },
    {
        address: '环县',
        code: '621022',
    },
    {
        address: '华池县',
        code: '621023',
    },
    {
        address: '合水县',
        code: '621024',
    },
    {
        address: '正宁县',
        code: '621025',
    },
    {
        address: '宁县',
        code: '621026',
    },
    {
        address: '镇原县',
        code: '621027',
    },
    {
        address: '定西市',
        code: '621100',
    },
    {
        address: '定西市市辖区',
        code: '621101',
    },
    {
        address: '安定区',
        code: '621102',
    },
    {
        address: '通渭县',
        code: '621121',
    },
    {
        address: '陇西县',
        code: '621122',
    },
    {
        address: '渭源县',
        code: '621123',
    },
    {
        address: '临洮县',
        code: '621124',
    },
    {
        address: '漳县',
        code: '621125',
    },
    {
        address: '岷县',
        code: '621126',
    },
    {
        address: '陇南市',
        code: '621200',
    },
    {
        address: '陇南市市辖区',
        code: '621201',
    },
    {
        address: '武都区',
        code: '621202',
    },
    {
        address: '成县',
        code: '621221',
    },
    {
        address: '文县',
        code: '621222',
    },
    {
        address: '宕昌县',
        code: '621223',
    },
    {
        address: '康县',
        code: '621224',
    },
    {
        address: '西和县',
        code: '621225',
    },
    {
        address: '礼县',
        code: '621226',
    },
    {
        address: '徽县',
        code: '621227',
    },
    {
        address: '两当县',
        code: '621228',
    },
    {
        address: '临夏回族自治州',
        code: '622900',
    },
    {
        address: '临夏市',
        code: '622901',
    },
    {
        address: '临夏县',
        code: '622921',
    },
    {
        address: '康乐县',
        code: '622922',
    },
    {
        address: '永靖县',
        code: '622923',
    },
    {
        address: '广河县',
        code: '622924',
    },
    {
        address: '和政县',
        code: '622925',
    },
    {
        address: '东乡族自治县',
        code: '622926',
    },
    {
        address: '积石山保安族东乡族撒拉族自治县',
        code: '622927',
    },
    {
        address: '甘南藏族自治州',
        code: '623000',
    },
    {
        address: '合作市',
        code: '623001',
    },
    {
        address: '临潭县',
        code: '623021',
    },
    {
        address: '卓尼县',
        code: '623022',
    },
    {
        address: '舟曲县',
        code: '623023',
    },
    {
        address: '迭部县',
        code: '623024',
    },
    {
        address: '玛曲县',
        code: '623025',
    },
    {
        address: '碌曲县',
        code: '623026',
    },
    {
        address: '夏河县',
        code: '623027',
    },
    {
        address: '青海省',
        code: '630000',
    },
    {
        address: '西宁市',
        code: '630100',
    },
    {
        address: '西宁市市辖区',
        code: '630101',
    },
    {
        address: '城东区',
        code: '630102',
    },
    {
        address: '城中区',
        code: '630103',
    },
    {
        address: '城西区',
        code: '630104',
    },
    {
        address: '城北区',
        code: '630105',
    },
    {
        address: '大通回族土族自治县',
        code: '630121',
    },
    {
        address: '湟中区',
        code: '630106',
    },
    {
        address: '湟源县',
        code: '630123',
    },
    {
        address: '海东市',
        code: '630200',
    },
    {
        address: '乐都区',
        code: '630202',
    },
    {
        address: '平安区',
        code: '630203',
    },
    {
        address: '民和回族土族自治县',
        code: '630222',
    },
    {
        address: '互助土族自治县',
        code: '630223',
    },
    {
        address: '化隆回族自治县',
        code: '630224',
    },
    {
        address: '循化撒拉族自治县',
        code: '630225',
    },
    {
        address: '海北藏族自治州',
        code: '632200',
    },
    {
        address: '门源回族自治县',
        code: '632221',
    },
    {
        address: '祁连县',
        code: '632222',
    },
    {
        address: '海晏县',
        code: '632223',
    },
    {
        address: '刚察县',
        code: '632224',
    },
    {
        address: '黄南藏族自治州',
        code: '632300',
    },
    {
        address: '同仁市',
        code: '632301',
    },
    {
        address: '尖扎县',
        code: '632322',
    },
    {
        address: '泽库县',
        code: '632323',
    },
    {
        address: '河南蒙古族自治县',
        code: '632324',
    },
    {
        address: '海南藏族自治州',
        code: '632500',
    },
    {
        address: '共和县',
        code: '632521',
    },
    {
        address: '同德县',
        code: '632522',
    },
    {
        address: '贵德县',
        code: '632523',
    },
    {
        address: '兴海县',
        code: '632524',
    },
    {
        address: '贵南县',
        code: '632525',
    },
    {
        address: '果洛藏族自治州',
        code: '632600',
    },
    {
        address: '玛沁县',
        code: '632621',
    },
    {
        address: '班玛县',
        code: '632622',
    },
    {
        address: '甘德县',
        code: '632623',
    },
    {
        address: '达日县',
        code: '632624',
    },
    {
        address: '久治县',
        code: '632625',
    },
    {
        address: '玛多县',
        code: '632626',
    },
    {
        address: '玉树藏族自治州',
        code: '632700',
    },
    {
        address: '玉树市',
        code: '632701',
    },
    {
        address: '杂多县',
        code: '632722',
    },
    {
        address: '称多县',
        code: '632723',
    },
    {
        address: '治多县',
        code: '632724',
    },
    {
        address: '囊谦县',
        code: '632725',
    },
    {
        address: '曲麻莱县',
        code: '632726',
    },
    {
        address: '海西蒙古族藏族自治州',
        code: '632800',
    },
    {
        address: '格尔木市',
        code: '632801',
    },
    {
        address: '德令哈市',
        code: '632802',
    },
    {
        address: '茫崖市',
        code: '632803',
    },
    {
        address: '乌兰县',
        code: '632821',
    },
    {
        address: '都兰县',
        code: '632822',
    },
    {
        address: '天峻县',
        code: '632823',
    },
    {
        address: '海西蒙古族藏族自治州直辖',
        code: '632825',
    },
    {
        address: '宁夏回族自治区',
        code: '640000',
    },
    {
        address: '银川市',
        code: '640100',
    },
    {
        address: '银川市市辖区',
        code: '640101',
    },
    {
        address: '兴庆区',
        code: '640104',
    },
    {
        address: '西夏区',
        code: '640105',
    },
    {
        address: '金凤区',
        code: '640106',
    },
    {
        address: '永宁县',
        code: '640121',
    },
    {
        address: '贺兰县',
        code: '640122',
    },
    {
        address: '灵武市',
        code: '640181',
    },
    {
        address: '石嘴山市',
        code: '640200',
    },
    {
        address: '石嘴山市市辖区',
        code: '640201',
    },
    {
        address: '大武口区',
        code: '640202',
    },
    {
        address: '惠农区',
        code: '640205',
    },
    {
        address: '平罗县',
        code: '640221',
    },
    {
        address: '吴忠市',
        code: '640300',
    },
    {
        address: '吴忠市市辖区',
        code: '640301',
    },
    {
        address: '利通区',
        code: '640302',
    },
    {
        address: '红寺堡区',
        code: '640303',
    },
    {
        address: '盐池县',
        code: '640323',
    },
    {
        address: '同心县',
        code: '640324',
    },
    {
        address: '青铜峡市',
        code: '640381',
    },
    {
        address: '固原市',
        code: '640400',
    },
    {
        address: '固原市市辖区',
        code: '640401',
    },
    {
        address: '原州区',
        code: '640402',
    },
    {
        address: '西吉县',
        code: '640422',
    },
    {
        address: '隆德县',
        code: '640423',
    },
    {
        address: '泾源县',
        code: '640424',
    },
    {
        address: '彭阳县',
        code: '640425',
    },
    {
        address: '中卫市',
        code: '640500',
    },
    {
        address: '中卫市市辖区',
        code: '640501',
    },
    {
        address: '沙坡头区',
        code: '640502',
    },
    {
        address: '中宁县',
        code: '640521',
    },
    {
        address: '海原县',
        code: '640522',
    },
    {
        address: '新疆维吾尔自治区',
        code: '650000',
    },
    {
        address: '乌鲁木齐市',
        code: '650100',
    },
    {
        address: '乌鲁木齐市市辖区',
        code: '650101',
    },
    {
        address: '天山区',
        code: '650102',
    },
    {
        address: '沙依巴克区',
        code: '650103',
    },
    {
        address: '新市区',
        code: '650104',
    },
    {
        address: '水磨沟区',
        code: '650105',
    },
    {
        address: '头屯河区',
        code: '650106',
    },
    {
        address: '达坂城区',
        code: '650107',
    },
    {
        address: '米东区',
        code: '650109',
    },
    {
        address: '乌鲁木齐县',
        code: '650121',
    },
    {
        address: '克拉玛依市',
        code: '650200',
    },
    {
        address: '克拉玛依市市辖区',
        code: '650201',
    },
    {
        address: '独山子区',
        code: '650202',
    },
    {
        address: '克拉玛依区',
        code: '650203',
    },
    {
        address: '白碱滩区',
        code: '650204',
    },
    {
        address: '乌尔禾区',
        code: '650205',
    },
    {
        address: '吐鲁番市',
        code: '650400',
    },
    {
        address: '高昌区',
        code: '650402',
    },
    {
        address: '鄯善县',
        code: '650421',
    },
    {
        address: '托克逊县',
        code: '650422',
    },
    {
        address: '胡杨河市',
        code: '659010',
    },
    {
        address: '哈密市',
        code: '650500',
    },
    {
        address: '伊州区',
        code: '650502',
    },
    {
        address: '巴里坤哈萨克自治县',
        code: '650521',
    },
    {
        address: '伊吾县',
        code: '650522',
    },
    {
        address: '昌吉回族自治州',
        code: '652300',
    },
    {
        address: '昌吉市',
        code: '652301',
    },
    {
        address: '阜康市',
        code: '652302',
    },
    {
        address: '呼图壁县',
        code: '652323',
    },
    {
        address: '玛纳斯县',
        code: '652324',
    },
    {
        address: '奇台县',
        code: '652325',
    },
    {
        address: '吉木萨尔县',
        code: '652327',
    },
    {
        address: '木垒哈萨克自治县',
        code: '652328',
    },
    {
        address: '博尔塔拉蒙古自治州',
        code: '652700',
    },
    {
        address: '博乐市',
        code: '652701',
    },
    {
        address: '阿拉山口市',
        code: '652702',
    },
    {
        address: '精河县',
        code: '652722',
    },
    {
        address: '温泉县',
        code: '652723',
    },
    {
        address: '巴音郭楞蒙古自治州',
        code: '652800',
    },
    {
        address: '库尔勒市',
        code: '652801',
    },
    {
        address: '轮台县',
        code: '652822',
    },
    {
        address: '尉犁县',
        code: '652823',
    },
    {
        address: '若羌县',
        code: '652824',
    },
    {
        address: '且末县',
        code: '652825',
    },
    {
        address: '焉耆回族自治县',
        code: '652826',
    },
    {
        address: '和静县',
        code: '652827',
    },
    {
        address: '和硕县',
        code: '652828',
    },
    {
        address: '博湖县',
        code: '652829',
    },
    {
        address: '阿克苏地区',
        code: '652900',
    },
    {
        address: '阿克苏市',
        code: '652901',
    },
    {
        address: '温宿县',
        code: '652922',
    },
    {
        address: '库车市',
        code: '652902',
    },
    {
        address: '沙雅县',
        code: '652924',
    },
    {
        address: '新和县',
        code: '652925',
    },
    {
        address: '拜城县',
        code: '652926',
    },
    {
        address: '乌什县',
        code: '652927',
    },
    {
        address: '阿瓦提县',
        code: '652928',
    },
    {
        address: '柯坪县',
        code: '652929',
    },
    {
        address: '克孜勒苏柯尔克孜自治州',
        code: '653000',
    },
    {
        address: '阿图什市',
        code: '653001',
    },
    {
        address: '阿克陶县',
        code: '653022',
    },
    {
        address: '阿合奇县',
        code: '653023',
    },
    {
        address: '乌恰县',
        code: '653024',
    },
    {
        address: '喀什地区',
        code: '653100',
    },
    {
        address: '喀什市',
        code: '653101',
    },
    {
        address: '疏附县',
        code: '653121',
    },
    {
        address: '疏勒县',
        code: '653122',
    },
    {
        address: '英吉沙县',
        code: '653123',
    },
    {
        address: '泽普县',
        code: '653124',
    },
    {
        address: '莎车县',
        code: '653125',
    },
    {
        address: '叶城县',
        code: '653126',
    },
    {
        address: '麦盖提县',
        code: '653127',
    },
    {
        address: '岳普湖县',
        code: '653128',
    },
    {
        address: '伽师县',
        code: '653129',
    },
    {
        address: '巴楚县',
        code: '653130',
    },
    {
        address: '塔什库尔干塔吉克自治县',
        code: '653131',
    },
    {
        address: '和田地区',
        code: '653200',
    },
    {
        address: '和田市',
        code: '653201',
    },
    {
        address: '和田县',
        code: '653221',
    },
    {
        address: '墨玉县',
        code: '653222',
    },
    {
        address: '皮山县',
        code: '653223',
    },
    {
        address: '洛浦县',
        code: '653224',
    },
    {
        address: '策勒县',
        code: '653225',
    },
    {
        address: '于田县',
        code: '653226',
    },
    {
        address: '民丰县',
        code: '653227',
    },
    {
        address: '伊犁哈萨克自治州',
        code: '654000',
    },
    {
        address: '伊宁市',
        code: '654002',
    },
    {
        address: '奎屯市',
        code: '654003',
    },
    {
        address: '霍尔果斯市',
        code: '654004',
    },
    {
        address: '伊宁县',
        code: '654021',
    },
    {
        address: '察布查尔锡伯自治县',
        code: '654022',
    },
    {
        address: '霍城县',
        code: '654023',
    },
    {
        address: '巩留县',
        code: '654024',
    },
    {
        address: '新源县',
        code: '654025',
    },
    {
        address: '昭苏县',
        code: '654026',
    },
    {
        address: '特克斯县',
        code: '654027',
    },
    {
        address: '尼勒克县',
        code: '654028',
    },
    {
        address: '塔城地区',
        code: '654200',
    },
    {
        address: '塔城市',
        code: '654201',
    },
    {
        address: '乌苏市',
        code: '654202',
    },
    {
        address: '额敏县',
        code: '654221',
    },
    {
        address: '沙湾县',
        code: '654223',
    },
    {
        address: '托里县',
        code: '654224',
    },
    {
        address: '裕民县',
        code: '654225',
    },
    {
        address: '和布克赛尔蒙古自治县',
        code: '654226',
    },
    {
        address: '阿勒泰地区',
        code: '654300',
    },
    {
        address: '阿勒泰市',
        code: '654301',
    },
    {
        address: '布尔津县',
        code: '654321',
    },
    {
        address: '富蕴县',
        code: '654322',
    },
    {
        address: '福海县',
        code: '654323',
    },
    {
        address: '哈巴河县',
        code: '654324',
    },
    {
        address: '青河县',
        code: '654325',
    },
    {
        address: '吉木乃县',
        code: '654326',
    },
    {
        address: '石河子市',
        code: '659001',
    },
    {
        address: '阿拉尔市',
        code: '659002',
    },
    {
        address: '图木舒克市',
        code: '659003',
    },
    {
        address: '五家渠市',
        code: '659004',
    },
    {
        address: '北屯市',
        code: '659005',
    },
    {
        address: '铁门关市',
        code: '659006',
    },
    {
        address: '双河市',
        code: '659007',
    },
    {
        address: '可克达拉市',
        code: '659008',
    },
    {
        address: '昆玉市',
        code: '659009',
    },
    {
        address: '台湾省',
        code: '710000',
    },
    {
        address: '香港特别行政区',
        code: '810000',
    },
    {
        address: '中西区',
        code: '810001',
    },
    {
        address: '湾仔区',
        code: '810002',
    },
    {
        address: '东区',
        code: '810003',
    },
    {
        address: '南区',
        code: '810004',
    },
    {
        address: '油尖旺区',
        code: '810005',
    },
    {
        address: '深水埗区',
        code: '810006',
    },
    {
        address: '九龙城区',
        code: '810007',
    },
    {
        address: '黄大仙区',
        code: '810008',
    },
    {
        address: '观塘区',
        code: '810009',
    },
    {
        address: '荃湾区',
        code: '810010',
    },
    {
        address: '屯门区',
        code: '810011',
    },
    {
        address: '元朗区',
        code: '810012',
    },
    {
        address: '北区',
        code: '810013',
    },
    {
        address: '大埔区',
        code: '810014',
    },
    {
        address: '西贡区',
        code: '810015',
    },
    {
        address: '沙田区',
        code: '810016',
    },
    {
        address: '葵青区',
        code: '810017',
    },
    {
        address: '离岛区',
        code: '810018',
    },
    {
        address: '澳门特别行政区',
        code: '820000',
    },
    {
        address: '花地玛堂区',
        code: '820001',
    },
    {
        address: '花王堂区',
        code: '820002',
    },
    {
        address: '望德堂区',
        code: '820003',
    },
    {
        address: '大堂区',
        code: '820004',
    },
    {
        address: '风顺堂区',
        code: '820005',
    },
    {
        address: '嘉模堂区',
        code: '820006',
    },
    {
        address: '路凼填海区',
        code: '820007',
    },
    {
        address: '圣方济各堂区',
        code: '820008',
    },
    {
        address: '外国',
        code: '900000',
    },
];
exports.default = weatherList;
//# sourceMappingURL=data.js.map