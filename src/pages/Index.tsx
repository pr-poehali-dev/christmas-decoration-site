import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const ornaments = [
    { id: 1, name: 'Красный шар с узором', price: '450₽', image: 'https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/abe366dd-b291-4657-9c8f-ef62702bcdc3.jpg' },
    { id: 2, name: 'Золотая шишка', price: '520₽', image: 'https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/abe366dd-b291-4657-9c8f-ef62702bcdc3.jpg' },
    { id: 3, name: 'Изумрудная звезда', price: '680₽', image: 'https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/abe366dd-b291-4657-9c8f-ef62702bcdc3.jpg' },
    { id: 4, name: 'Сказочный домик', price: '890₽', image: 'https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/abe366dd-b291-4657-9c8f-ef62702bcdc3.jpg' },
    { id: 5, name: 'Ангел ручной работы', price: '1200₽', image: 'https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/abe366dd-b291-4657-9c8f-ef62702bcdc3.jpg' },
    { id: 6, name: 'Винтажный колокольчик', price: '590₽', image: 'https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/abe366dd-b291-4657-9c8f-ef62702bcdc3.jpg' },
  ];

  const timeline = [
    { year: '1952', title: 'Основание мастерской', description: 'Начало традиции создания елочных игрушек вручную' },
    { year: '1975', title: 'Мастера-стеклодувы', description: 'Освоение техники художественного стеклодувия' },
    { year: '1990', title: 'Семейное дело', description: 'Передача секретов мастерства следующему поколению' },
    { year: '2010', title: 'Международное признание', description: 'Участие в выставках и экспорт изделий' },
    { year: '2024', title: 'Современность и традиции', description: 'Сочетание классических техник с новыми дизайнами' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">✨ Елочные Чудеса</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'gallery', 'history', 'production', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'history' && 'История'}
                  {section === 'production' && 'Производство'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-primary mb-6 animate-float">
            Волшебство Ручной Работы
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Создаём сказочные елочные игрушки с 1952 года. Каждое изделие хранит тепло рук мастера и душу традиций.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-shimmer">
            <img 
              src="https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/f8fbbed2-5a9e-457b-9b3d-1aef73f8a711.jpg" 
              alt="Волшебные елочные игрушки"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="mt-12 flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-sparkle"
              onClick={() => scrollToSection('gallery')}
            >
              <Icon name="Sparkles" className="mr-2" />
              Смотреть коллекцию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Phone" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-4">Галерея Изделий</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Каждая игрушка — произведение искусства</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ornaments.map((ornament, index) => (
              <Card 
                key={ornament.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={ornament.image} 
                    alt={ornament.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium animate-shimmer">
                    {ornament.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{ornament.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Ручная работа, стекло</p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-primary mb-4">История Мастерской</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">70+ лет традиций и мастерства</p>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
            
            {timeline.map((event, index) => (
              <div 
                key={event.year} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'}`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow animate-float"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white animate-sparkle"></div>
                  <div className="text-3xl font-bold text-accent mb-2">{event.year}</div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-4">Процесс Производства</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">От идеи до готовой игрушки</p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://cdn.poehali.dev/projects/9ad1dfe0-d1b8-4722-aff7-607265c9f20b/files/2c37be99-e67c-4df3-83db-47ab0b20c539.jpg" 
                alt="Процесс создания игрушек"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="space-y-6">
              {[
                { icon: 'Lightbulb', title: 'Эскиз и дизайн', desc: 'Художники создают уникальные образы будущих игрушек' },
                { icon: 'Flame', title: 'Стеклодувное мастерство', desc: 'Мастера выдувают заготовки при температуре 1400°C' },
                { icon: 'Paintbrush', title: 'Художественная роспись', desc: 'Каждая деталь расписывается вручную' },
                { icon: 'Sparkles', title: 'Декорирование', desc: 'Добавление блесток, узоров и финальных штрихов' },
                { icon: 'Gift', title: 'Упаковка', desc: 'Бережная упаковка в праздничные коробки' },
              ].map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-shimmer"
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name={step.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-primary mb-4">Контакты</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Мы всегда рады помочь вам</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 animate-float">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-secondary" />
                  <span>г. Москва, ул. Мастеров, д. 12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-secondary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-secondary" />
                  <span>info@elochnie-chudesa.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-secondary" />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 animate-float" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Напишите нам</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">✨ Елочные Чудеса — Волшебство с 1952 года</p>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
