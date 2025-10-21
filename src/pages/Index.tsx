import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MoneyBackground from '@/components/MoneyBackground';

const Index = () => {
  const [propertyPrice, setPropertyPrice] = useState(3000000);
  const [initialPayment, setInitialPayment] = useState(600000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const calculateMonthlyPayment = () => {
    const principal = propertyPrice - initialPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}`);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <MoneyBackground />
      <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🥭</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">МангоДом</span>
          </div>
          <nav className="hidden lg:flex gap-8">
            <a href="#programs" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Программы</a>
            <a href="#calculator" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Калькулятор</a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              Ипотека от 2%
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                по госпрограммам
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Помогаем получить ипотеку: семейная, дальневосточная,
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              для врачей и педагогов, сельская
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать ипотеку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary/5">
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Ипотечные программы</h2>
            <p className="text-lg text-gray-600">
              Подберём оптимальную программу под ваши условия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Семейная ипотека',
                rate: 'от 6%',
                desc: 'Для семей с детьми, рожденными с 2018 года'
              },
              {
                icon: '🌅',
                title: 'Дальневосточная',
                rate: 'от 2%',
                desc: 'Для жителей Дальневосточного федерального округа'
              },
              {
                icon: '⚕️',
                title: 'Для врачей',
                rate: 'от 2%',
                desc: 'Специальные условия для медицинских работников'
              },
              {
                icon: '👨‍🏫',
                title: 'Для педагогов',
                rate: 'от 2%',
                desc: 'Льготная ставка для учителей и преподавателей'
              },
              {
                icon: '🌾',
                title: 'Сельская ипотека',
                rate: 'от 3%',
                desc: 'Для покупки жилья в сельской местности'
              },
              {
                icon: '🏢',
                title: 'IT-ипотека',
                rate: 'от 5%',
                desc: 'Для специалистов IT-сферы'
              }
            ].map((program, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{program.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-3">{program.rate}</div>
                  <p className="text-gray-600">{program.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Калькулятор ипотеки</h2>
              <p className="text-lg text-gray-600">
                Рассчитайте ежемесячный платёж за несколько секунд
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="animate-scale-in shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Параметры кредита</CardTitle>
                  <CardDescription>Настройте условия под себя</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">Стоимость недвижимости</Label>
                      <span className="text-xl font-bold text-gray-900">{propertyPrice.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <Slider
                      value={[propertyPrice]}
                      onValueChange={(val) => setPropertyPrice(val[0])}
                      min={1000000}
                      max={30000000}
                      step={100000}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">Первоначальный взнос</Label>
                      <span className="text-xl font-bold text-gray-900">{initialPayment.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <Slider
                      value={[initialPayment]}
                      onValueChange={(val) => setInitialPayment(val[0])}
                      min={propertyPrice * 0.15}
                      max={propertyPrice * 0.5}
                      step={50000}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500">
                      {Math.round((initialPayment / propertyPrice) * 100)}% от стоимости
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">Срок кредита</Label>
                      <span className="text-xl font-bold text-gray-900">{loanTerm} лет</span>
                    </div>
                    <Slider
                      value={[loanTerm]}
                      onValueChange={(val) => setLoanTerm(val[0])}
                      min={5}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-semibold">Процентная ставка</Label>
                      <span className="text-xl font-bold text-primary">{interestRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in border-2 border-primary/30 bg-gradient-to-br from-white to-orange-50/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Ваш ежемесячный платёж</CardTitle>
                  <CardDescription>Примерный расчёт по госпрограмме</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-8 border-b">
                    <p className="text-sm text-gray-600 mb-3">Ежемесячный платёж</p>
                    <p className="text-6xl font-extrabold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                      {monthlyPayment.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm">
                      <span className="text-gray-600 font-medium">Сумма кредита</span>
                      <span className="font-bold text-gray-900">{(propertyPrice - initialPayment).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm">
                      <span className="text-gray-600 font-medium">Процентная ставка</span>
                      <span className="font-bold text-primary">{interestRate}% годовых</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    * Расчёт является предварительным. Точные условия уточняйте у специалиста
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Почему выбирают нас</h2>
              <p className="text-lg text-gray-600">
                Более 500 семей уже получили ключи от своей мечты
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Clock', title: 'Одобрение за 1 день', desc: 'Быстрое рассмотрение заявки' },
                { icon: 'Shield', title: 'Полное сопровождение', desc: 'От заявки до получения ключей' },
                { icon: 'FileText', title: 'Помощь с документами', desc: 'Соберём все справки за вас' },
                { icon: 'Award', title: '100% одобрение', desc: 'Подберём программу под любые условия' }
              ].map((benefit, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-scale-in border-2 hover:border-primary/30">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-orange-200/50 flex items-center justify-center">
                      <Icon name={benefit.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Частые вопросы</h2>
              <p className="text-lg text-gray-600">
                Ответы на самые популярные вопросы об ипотеке
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: 'Какие документы нужны для оформления ипотеки?',
                  a: 'Для оформления ипотеки понадобятся: паспорт, СНИЛС, справка о доходах (2-НДФЛ или по форме банка), трудовая книжка или копия трудового договора. В зависимости от программы могут потребоваться дополнительные документы.'
                },
                {
                  q: 'Какой минимальный первоначальный взнос?',
                  a: 'Минимальный первоначальный взнос по большинству программ составляет 15% от стоимости недвижимости. По некоторым льготным программам взнос может быть меньше.'
                },
                {
                  q: 'Можно ли досрочно погасить ипотеку?',
                  a: 'Да, досрочное погашение ипотеки возможно в любой момент без штрафов и комиссий. Вы можете вносить дополнительные платежи как частично, так и полностью погасить кредит.'
                },
                {
                  q: 'Сколько времени занимает одобрение ипотеки?',
                  a: 'При полном пакете документов одобрение ипотеки занимает от 1 до 3 рабочих дней. Мы помогаем ускорить этот процесс и получить решение максимально быстро.'
                },
                {
                  q: 'Какая недвижимость подходит под ипотеку?',
                  a: 'Под ипотеку можно купить квартиру в новостройке или на вторичном рынке, частный дом или таунхаус. Объект должен соответствовать требованиям банка и быть в залоговом состоянии.'
                }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="text-left font-bold text-base hover:text-primary text-gray-900 py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Получите консультацию</h2>
            <p className="text-xl mb-8 text-white/90">
              Оставьте заявку и мы перезвоним в течение 15 минут
            </p>

            <Card className="text-left shadow-2xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-900 font-semibold">Ваше имя</Label>
                      <Input 
                        id="name" 
                        placeholder="Иван" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900 font-semibold">Телефон</Label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-2 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg text-base">
                    <Icon name="Send" size={18} className="mr-2" />
                    Получить консультацию
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🥭</span>
                </div>
                <span className="text-xl font-bold text-gray-900">МангоДом</span>
              </div>
              <p className="text-sm text-gray-600">
                Помогаем получить ипотеку от 2% по госпрограммам
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-gray-900">Программы</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Семейная ипотека</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дальневосточная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для врачей</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для педагогов</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-gray-900">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-gray-900">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  info@mangodom.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-gray-600">
            <p>© 2024 МангоДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;