import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [downPayment, setDownPayment] = useState(600000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate] = useState(12.5);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - (loanAmount - downPayment);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={32} />
            <span className="text-2xl font-bold">ИпотекаПро</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ипотека вашей мечты
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Индивидуальные условия, быстрое одобрение и поддержка на каждом этапе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать ипотеку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <section id="calculator" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Калькулятор ипотеки</h2>
            <p className="text-lg text-muted-foreground">
              Рассчитайте ваш ежемесячный платёж и график выплат
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Параметры ипотеки</CardTitle>
                <CardDescription>Настройте условия кредита</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Стоимость недвижимости</Label>
                    <span className="text-lg font-semibold">{loanAmount.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(val) => setLoanAmount(val[0])}
                    min={1000000}
                    max={20000000}
                    step={100000}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Первоначальный взнос</Label>
                    <span className="text-lg font-semibold">{downPayment.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  <Slider
                    value={[downPayment]}
                    onValueChange={(val) => setDownPayment(val[0])}
                    min={loanAmount * 0.1}
                    max={loanAmount * 0.5}
                    step={50000}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    {Math.round((downPayment / loanAmount) * 100)}% от стоимости
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Срок кредита</Label>
                    <span className="text-lg font-semibold">{loanTerm} лет</span>
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
                    <Label>Процентная ставка</Label>
                    <span className="text-lg font-semibold text-primary">{interestRate}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle>Результаты расчёта</CardTitle>
                <CardDescription>Ваши ежемесячные платежи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-6 border-b">
                  <p className="text-sm text-muted-foreground mb-2">Ежемесячный платёж</p>
                  <p className="text-5xl font-bold text-primary">
                    {monthlyPayment.toLocaleString('ru-RU')} ₽
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background">
                    <span className="text-muted-foreground">Сумма кредита</span>
                    <span className="font-semibold">{(loanAmount - downPayment).toLocaleString('ru-RU')} ₽</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background">
                    <span className="text-muted-foreground">Общая сумма выплат</span>
                    <span className="font-semibold">{totalPayment.toLocaleString('ru-RU')} ₽</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background">
                    <span className="text-muted-foreground">Переплата</span>
                    <span className="font-semibold text-accent">{totalInterest.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">
              Более 10 000 довольных клиентов уже получили ключи от своих квартир
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Zap', title: 'Быстро', desc: 'Решение за 1 день' },
              { icon: 'Shield', title: 'Надёжно', desc: 'Работаем с 2010 года' },
              { icon: 'Percent', title: 'Выгодно', desc: 'Ставка от 9.5%' },
              { icon: 'Users', title: 'Поддержка', desc: '24/7 консультации' }
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground">
              Мы предлагаем лучшие ипотечные программы от ведущих банков России
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Семейная ипотека',
                a: 'Льготные условия для семей с детьми. Ставка от 6% годовых. Первоначальный взнос от 15%. Сумма до 12 млн рублей.'
              },
              {
                q: 'IT-ипотека',
                a: 'Специальные условия для специалистов IT-сферы. Ставка от 5% годовых. Минимальный первоначальный взнос 15%. Максимальная сумма 18 млн рублей.'
              },
              {
                q: 'Господдержка 2024',
                a: 'Программа с государственной поддержкой. Ставка от 8% годовых. Первоначальный взнос от 20%. Для приобретения новостроек.'
              },
              {
                q: 'Рефинансирование',
                a: 'Снизьте процентную ставку по действующему кредиту. Объединение нескольких кредитов в один. Выгодные условия для клиентов с хорошей кредитной историей.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Оставьте заявку и наш специалист свяжется с вами в течение 15 минут
            </p>

            <Card className="text-left">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Иван" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" className="text-primary" size={24} />
                <span className="text-xl font-bold">ИпотекаПро</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш надёжный партнёр в получении ипотечного кредита
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Программы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ipoteka.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ИпотекаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
