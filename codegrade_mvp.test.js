import functions from './index';

describe('fooFunction', ()=>{
    it('as sa döner', ()=>{
        expect(functions.as()).toBe('sa');
    })
});

describe('Kisi örnekleri', () => {
    let oguz
    const foods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    beforeEach(() => {
      oguz = new functions.Kisi('Oğuz', 20)
    })
    it('verilen isimle yükleniyor', () => {
      expect(oguz.isim).toBe('Oğuz')
    })
    it('verilen yasla yükleniyor', () => {
      expect(oguz.yas).toBe(20)
    })
    it('boş mide ile yükleniyor', () => {
      expect(oguz.mide).toEqual([])
      expect(oguz.mide.length).toBe(0)
    })
/*     it('ye, bosalt, toString metodları prototypelarda var', () => {
      expect(neo.__proto__.ye).toBeDefined();
      expect(neo.__proto__.bosalt).toBeDefined();
      expect(neo.__proto__.toString).toBeDefined();
    }) */
    it('10 adet yemek yiyebiliyor', () => {
      foods.forEach(item => oguz.ye(item))
      foods.forEach(item => expect(oguz.mide).toContain(item))
    })
    it('10 dan fazla yiyemiyor', () => {
      foods.forEach(item => oguz.ye(item))
      oguz.ye(11)
      expect(oguz.mide).not.toBe(11)
    })
    it('mideyi boşaltabiliyor', () => {
      foods.forEach(item => oguz.ye(item))
      oguz.bosalt()
      expect(oguz.mide.length).toEqual(0)
    })
    it('isim ve yas döndürüyor', () => {
      const str = oguz.toString()
      expect(str).toContain('Oğuz')
      expect(str).toContain('20')
    })
  })
  
  //car
  describe('Araba örnekleri', () => {
    let batmobile
    beforeEach(() => {
      batmobile = new functions.Araba('BatMobile', 20)
    })
    it('verilen modelde yükleniyor', () => {
      expect(batmobile.model).toBe('BatMobile')
    })
    it('verilen milesPerGallon la yükleniyor', () => {
      expect(batmobile.milesPerGallon).toEqual(20)
    })
    it('boş tankla yükleniyor', () => {
      expect(batmobile.tank).toEqual(0)
    })
    it('odometer 0 yükleniyor', () => {
      expect(batmobile.odometer).toEqual(0)
    })
    /* it('prototypeda fill metodu var', () => {
      expect(batmobile.__proto__.fill).not.toBeUndefined();
    }) */
    it('fill metodu tankı verilen değişken kadar artıyor', () => {
      batmobile.fill(10)
      expect(batmobile.tank).toEqual(10)
      batmobile.fill(10)
      expect(batmobile.tank).toEqual(20)
    })
  })
  
/*   describe('Bebek örnekleri', () => {
    let baby
    beforeEach(() => {
      baby = new functions.Bebek('Lucy', 5, 'trains')
    })
    it('verilen isimle yükleniyor', () => {
      expect(baby.isim).toBe('Lucy')
    })
    it('verilen yasla yükleniyor', () => {
      expect(baby.yas).toEqual(5)
    })
    it('verilen favori oyuncakla yükleniyor', () => {
      expect(baby.favoriOyuncak).toBe('trains')
    })
    it('prototipte oyna metodu var', () => {
      expect(baby.__proto__.ona).not.toBeUndefined();
    })
    it('favori oyuncağıyla oynayabiliyor', () => {
      expect(baby.oyna()).toContain('trains')
    })
    it('Kisi.prototype metotları miras alıyor', () => {
      expect(baby.__proto__.ye).not.toBeUndefined();
    })
    it('Kisi.prototype metotları miras alıyor', () => {
        expect(baby.__proto__.bosalt).not.toBeUndefined();
      })
  })
*/
