import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Texture {
  id: number;
  name: string;
  category: string;
  resolution: string;
  format: string;
  type: string;
  image: string;
  downloads: number;
  isFavorite: boolean;
}

const mockTextures: Texture[] = [
  {
    id: 1,
    name: 'Бетонная стена',
    category: 'Бетон',
    resolution: '4K',
    format: 'PNG',
    type: 'PBR',
    image: 'https://cdn.poehali.dev/projects/8fc2e125-6ed3-4219-bb75-d60ba0170249/files/b4998d72-1c84-41a5-81e2-5520c286905f.jpg',
    downloads: 1523,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Деревянный пол',
    category: 'Дерево',
    resolution: '8K',
    format: 'JPG',
    type: 'Seamless',
    image: 'https://cdn.poehali.dev/projects/8fc2e125-6ed3-4219-bb75-d60ba0170249/files/58d7d654-3345-4976-8a89-c1bd66d1d122.jpg',
    downloads: 2341,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Ржавый металл',
    category: 'Металл',
    resolution: '4K',
    format: 'PSD',
    type: 'PBR',
    image: 'https://cdn.poehali.dev/projects/8fc2e125-6ed3-4219-bb75-d60ba0170249/files/1a02ddd7-e2f0-4048-8882-a8ae46ef5f13.jpg',
    downloads: 987,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Кирпичная кладка',
    category: 'Кирпич',
    resolution: '2K',
    format: 'PNG',
    type: 'Seamless',
    image: 'https://cdn.poehali.dev/projects/8fc2e125-6ed3-4219-bb75-d60ba0170249/files/b4998d72-1c84-41a5-81e2-5520c286905f.jpg',
    downloads: 1876,
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Дубовая доска',
    category: 'Дерево',
    resolution: '8K',
    format: 'JPG',
    type: 'PBR',
    image: 'https://cdn.poehali.dev/projects/8fc2e125-6ed3-4219-bb75-d60ba0170249/files/58d7d654-3345-4976-8a89-c1bd66d1d122.jpg',
    downloads: 3210,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Металлическая решетка',
    category: 'Металл',
    resolution: '4K',
    format: 'PNG',
    type: 'Seamless',
    image: 'https://cdn.poehali.dev/projects/8fc2e125-6ed3-4219-bb75-d60ba0170249/files/1a02ddd7-e2f0-4048-8882-a8ae46ef5f13.jpg',
    downloads: 1432,
    isFavorite: false,
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResolution, setSelectedResolution] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [activeSection, setActiveSection] = useState('catalog');
  const [textures, setTextures] = useState(mockTextures);

  const filteredTextures = textures.filter((texture) => {
    const matchesSearch = texture.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesResolution = selectedResolution === 'all' || texture.resolution === selectedResolution;
    const matchesFormat = selectedFormat === 'all' || texture.format === selectedFormat;
    const matchesType = selectedType === 'all' || texture.type === selectedType;
    
    return matchesSearch && matchesResolution && matchesFormat && matchesType;
  });

  const toggleFavorite = (id: number) => {
    setTextures(textures.map(t => 
      t.id === id ? { ...t, isFavorite: !t.isFavorite } : t
    ));
  };

  const categories = ['Все', 'Бетон', 'Дерево', 'Металл', 'Кирпич', 'Камень', 'Ткань'];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Layers" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-primary">TextureHub</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveSection('categories')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'categories' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Категории
              </button>
              <button 
                onClick={() => setActiveSection('favorites')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'favorites' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Избранное
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                О сайте
              </button>
              <button 
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Контакты
              </button>
            </nav>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Upload" size={18} className="mr-2" />
              Загрузить
            </Button>
          </div>

          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск текстур..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-border"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'catalog' && (
          <>
            <section className="mb-12">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Разрешение
                  </label>
                  <Select value={selectedResolution} onValueChange={setSelectedResolution}>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все</SelectItem>
                      <SelectItem value="2K">2K</SelectItem>
                      <SelectItem value="4K">4K</SelectItem>
                      <SelectItem value="8K">8K</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Формат
                  </label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все</SelectItem>
                      <SelectItem value="PNG">PNG</SelectItem>
                      <SelectItem value="JPG">JPG</SelectItem>
                      <SelectItem value="PSD">PSD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Тип текстуры
                  </label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все</SelectItem>
                      <SelectItem value="PBR">PBR</SelectItem>
                      <SelectItem value="Seamless">Seamless</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedResolution('all');
                      setSelectedFormat('all');
                      setSelectedType('all');
                    }}
                    className="border-border hover:bg-secondary"
                  >
                    <Icon name="X" size={18} className="mr-2" />
                    Сбросить
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTextures.map((texture) => (
                  <Card 
                    key={texture.id} 
                    className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={texture.image} 
                        alt={texture.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button
                        onClick={() => toggleFavorite(texture.id)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        <Icon 
                          name={texture.isFavorite ? "Heart" : "Heart"} 
                          size={18} 
                          className={texture.isFavorite ? "text-primary fill-primary" : "text-white"}
                        />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {texture.resolution}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{texture.name}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Tag" size={14} />
                          {texture.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Download" size={14} />
                          {texture.downloads}
                        </span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="outline" className="text-xs border-border">
                          {texture.format}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-border">
                          {texture.type}
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTextures.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground text-lg">Текстуры не найдены</p>
                </div>
              )}
            </section>
          </>
        )}

        {activeSection === 'categories' && (
          <section className="py-8">
            <h2 className="text-3xl font-bold mb-8">Категории текстур</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Card 
                  key={category} 
                  className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <CardContent className="p-6 text-center">
                    <Icon name="FolderOpen" size={32} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold">{category}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'favorites' && (
          <section className="py-8">
            <h2 className="text-3xl font-bold mb-8">Избранное</h2>
            {textures.filter(t => t.isFavorite).length === 0 ? (
              <div className="text-center py-16">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground text-lg">Нет избранных текстур</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {textures.filter(t => t.isFavorite).map((texture) => (
                  <Card 
                    key={texture.id} 
                    className="bg-card border-border overflow-hidden"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={texture.image} 
                        alt={texture.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg">{texture.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">О сайте</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="text-lg text-muted-foreground mb-4">
                TextureHub — это библиотека высококачественных текстур для 3D-моделирования и визуализации.
              </p>
              <p className="text-muted-foreground mb-4">
                Мы предлагаем широкий выбор текстур в различных разрешениях и форматах, включая PBR-материалы и seamless паттерны.
              </p>
              <p className="text-muted-foreground">
                Все текстуры тщательно отобраны и оптимизированы для профессионального использования в 3D-проектах.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Контакты</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>support@texturehub.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <span>Telegram: @texturehub</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Globe" size={20} className="text-primary" />
                  <span>www.texturehub.com</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 TextureHub. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
