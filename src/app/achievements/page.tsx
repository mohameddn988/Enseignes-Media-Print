'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  Calendar,
  Award,
  Users,
  Building,
  Star,
  TrendingUp,
  MapPin,
  Eye,
  ArrowRight,
  ArrowLeft, // ajouté pour navigation modal
  CheckCircle,
  Crown,
  Target,
  X
} from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const AchievementsPage = () => {
  const [selectedProject, setSelectedProject] = useState<GalleryImage | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const t = useTranslations();

  // Set initial filter after translations are loaded
  React.useEffect(() => {
    if (!currentFilter) {
      setCurrentFilter(t('achievements.page.portfolio.categories.all'));
    }
  }, [currentFilter, t]);

  // Company milestones
  const milestones = t.raw('achievements.page.timeline.milestones').map((milestone: any, index: number) => {
    const icons = [Building, TrendingUp, Target, Crown];
    return {
      ...milestone,
      icon: icons[index],
      color: "bg-blue-500"
    };
  });

  // Gallery images organized by category
  const galleryImages: GalleryImage[] = [
    // Auvent & Narquise
    { id: 'auvent-1', src: '/auvent & Narquise/20170323_101919.jpg', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-2', src: '/auvent & Narquise/20170324_082904.jpg', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-3', src: '/auvent & Narquise/IMG_4390.JPG', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-4', src: '/auvent & Narquise/IMG_4397.JPG', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-5', src: '/auvent & Narquise/Photos-0063.jpg', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-6', src: '/auvent & Narquise/Photos-0104.jpg', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-7', src: '/auvent & Narquise/Photos-0105.jpg', alt: 'Auvent & Narquise', category: 'awnings' },
    { id: 'auvent-8', src: '/auvent & Narquise/5380605573460418218.jpg', alt: 'Auvent & Narquise', category: 'awnings' },
    
    // Boitier lumineuse
    { id: 'boitier-1', src: '/boitier lumineuse/20220318_121309.jpg', alt: 'Boitier lumineuse', category: 'lightbox' },
    { id: 'boitier-2', src: '/boitier lumineuse/20240328_124126.jpg', alt: 'Boitier lumineuse', category: 'lightbox' },
    { id: 'boitier-3', src: '/boitier lumineuse/20240328_124159.jpg', alt: 'Boitier lumineuse', category: 'lightbox' },
    { id: 'boitier-4', src: '/boitier lumineuse/20240328_132747.jpg', alt: 'Boitier lumineuse', category: 'lightbox' },
    { id: 'boitier-5', src: '/boitier lumineuse/20240906_134657.jpg', alt: 'Boitier lumineuse', category: 'lightbox' },
    { id: 'boitier-6', src: '/boitier lumineuse/IMG_20250425_104737670_HDR.jpg', alt: 'Boitier lumineuse', category: 'lightbox' },
    
    // Enseignes chanel
    { id: 'chanel-1', src: '/enseignes chanel/20211208_165149.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-2', src: '/enseignes chanel/20220118_152259.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-3', src: '/enseignes chanel/20220217_100611.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-4', src: '/enseignes chanel/20220228_152916.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-5', src: '/enseignes chanel/20220303_110720.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-6', src: '/enseignes chanel/20220401_122402.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-7', src: '/enseignes chanel/20220408_161905.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-8', src: '/enseignes chanel/20220415_120036.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-9', src: '/enseignes chanel/20220912_112222.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-10', src: '/enseignes chanel/20230216_134916.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-11', src: '/enseignes chanel/20230810_121055.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-12', src: '/enseignes chanel/20231026_144030.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-13', src: '/enseignes chanel/20231102_142323.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-14', src: '/enseignes chanel/20240221_094143.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-15', src: '/enseignes chanel/20240314_211926.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-16', src: '/enseignes chanel/20240324_111200.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-17', src: '/enseignes chanel/20240324_111241.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-18', src: '/enseignes chanel/20240822_131338.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-19', src: '/enseignes chanel/20240920_122559.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-20', src: '/enseignes chanel/20241128_112717.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-21', src: '/enseignes chanel/20241203_175211.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-22', src: '/enseignes chanel/20241203_175233.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-23', src: '/enseignes chanel/20241225_150141.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-24', src: '/enseignes chanel/20241225_151017.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-25', src: '/enseignes chanel/20250131_125932.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-26', src: '/enseignes chanel/IMG_20240607_133340193.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-27', src: '/enseignes chanel/IMG_20240614_153300543.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-28', src: '/enseignes chanel/IMG_20240625_202002867_HDR.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-29', src: '/enseignes chanel/IMG_20240628_133509936_HDR.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-30', src: '/enseignes chanel/Photo 017.jpg', alt: 'Enseignes chanel', category: 'channel' },
    { id: 'chanel-31', src: '/enseignes chanel/-1450060136912132737.jpg', alt: 'Enseignes chanel', category: 'channel' },
    
    // Enseignes en lettres decoupées
    { id: 'lettres-1', src: '/Enseignes en lettres decoupées/20220219_144518.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-2', src: '/Enseignes en lettres decoupées/20220329_133202.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-3', src: '/Enseignes en lettres decoupées/20230127_135748.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-4', src: '/Enseignes en lettres decoupées/20230207_121345.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-5', src: '/Enseignes en lettres decoupées/20231026_142841.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-6', src: '/Enseignes en lettres decoupées/20240221_102559.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-7', src: '/Enseignes en lettres decoupées/20241217_105942.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-8', src: '/Enseignes en lettres decoupées/20241225_112532.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-9', src: '/Enseignes en lettres decoupées/BOUCHERIE.jpg', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    { id: 'lettres-10', src: '/Enseignes en lettres decoupées/IMG_0775.JPG', alt: 'Enseignes en lettres decoupées', category: 'letters' },
    
    // Enseignes push thrue
    { id: 'push-1', src: '/enseignes push thrue/20231024_152835.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-2', src: '/enseignes push thrue/20231105_100248.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-3', src: '/enseignes push thrue/20240201_110248.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-4', src: '/enseignes push thrue/20240828_164128.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-5', src: '/enseignes push thrue/20240830_173006.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-6', src: '/enseignes push thrue/20240909_143150.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-7', src: '/enseignes push thrue/20241216_141410.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    { id: 'push-8', src: '/enseignes push thrue/Photos-0099.jpg', alt: 'Enseignes push thrue', category: 'pushThru' },
    
    // Enseignes pylone
    { id: 'pylone-1', src: '/Enseignes pylone/20220721_134026.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-2', src: '/Enseignes pylone/20230919_104255.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-3', src: '/Enseignes pylone/IMG_1171.JPG', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-4', src: '/Enseignes pylone/IMG_1172.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-5', src: '/Enseignes pylone/IMG_2552.JPG', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-6', src: '/Enseignes pylone/IMG_2839.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-7', src: '/Enseignes pylone/IMG_2840.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-8', src: '/Enseignes pylone/IMG_3059.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-9', src: '/Enseignes pylone/IMG_3138.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-10', src: '/Enseignes pylone/IMG_3468.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-11', src: '/Enseignes pylone/IMG_4422.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-12', src: '/Enseignes pylone/Photos-0049.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-13', src: '/Enseignes pylone/Photos-0051.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-14', src: '/Enseignes pylone/Bourgjoie-Enseigne.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-15', src: '/Enseignes pylone/MO_C_4343-1500x1125.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-16', src: '/Enseignes pylone/-1509381425750824831.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    { id: 'pylone-17', src: '/Enseignes pylone/3551580532878928232.jpg', alt: 'Enseignes pylone', category: 'pylon' },
    
    // Habillage vetrines & mural
    { id: 'habillage-1', src: '/Habillage vetrines  & mural/20211203_132541.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-2', src: '/Habillage vetrines  & mural/20220825_144442.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-3', src: '/Habillage vetrines  & mural/20230926_172959.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-4', src: '/Habillage vetrines  & mural/20231026_142817.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-5', src: '/Habillage vetrines  & mural/20240313_170709.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-6', src: '/Habillage vetrines  & mural/20240920_122607.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-7', src: '/Habillage vetrines  & mural/IMG_20240612_160112618.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    { id: 'habillage-8', src: '/Habillage vetrines  & mural/IMG_20240619_104154381_HDR.jpg', alt: 'Habillage vetrines & mural', category: 'covering' },
    
    // Neon flex
    { id: 'neon-1', src: '/Neon flex/20211201_173222.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-2', src: '/Neon flex/20211202_144942.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-3', src: '/Neon flex/20220223_120151.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-4', src: '/Neon flex/20220316_121227.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-5', src: '/Neon flex/20231026_142810.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-6', src: '/Neon flex/IMG_20240503_201128894.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-7', src: '/Neon flex/IMG_20240503_201444516_HDR.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-8', src: '/Neon flex/IMG_20240517_012057248.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-9', src: '/Neon flex/IMG_20240805_131521407_HDR.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-10', src: '/Neon flex/20240927_144236.jpg', alt: 'Neon flex', category: 'neon' },
    { id: 'neon-11', src: '/Neon flex/20240927_144246.jpg', alt: 'Neon flex', category: 'neon' }
  ];

  // Filter and pagination logic
  const categoryMapping: { [key: string]: string } = {
    [t('achievements.page.portfolio.categories.all')]: 'all',
    [t('achievements.page.portfolio.categories.awnings')]: 'awnings',
    [t('achievements.page.portfolio.categories.lightbox')]: 'lightbox',
    [t('achievements.page.portfolio.categories.channel')]: 'channel',
    [t('achievements.page.portfolio.categories.letters')]: 'letters',
    [t('achievements.page.portfolio.categories.pushThru')]: 'pushThru',
    [t('achievements.page.portfolio.categories.pylon')]: 'pylon',
    [t('achievements.page.portfolio.categories.covering')]: 'covering',
    [t('achievements.page.portfolio.categories.neon')]: 'neon'
  };

  const filteredImages = currentFilter === t('achievements.page.portfolio.categories.all')
    ? galleryImages
    : galleryImages.filter(img => img.category === categoryMapping[currentFilter]);
  
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Filter categories
  const filterCategories = [
    t('achievements.page.portfolio.categories.all'),
    t('achievements.page.portfolio.categories.awnings'),
    t('achievements.page.portfolio.categories.lightbox'), 
    t('achievements.page.portfolio.categories.channel'),
    t('achievements.page.portfolio.categories.letters'),
    t('achievements.page.portfolio.categories.pushThru'),
    t('achievements.page.portfolio.categories.pylon'),
    t('achievements.page.portfolio.categories.covering'),
    t('achievements.page.portfolio.categories.neon')
  ];

  const stats = t.raw('achievements.page.stats').map((stat: any, index: number) => {
    const icons = [Calendar, CheckCircle, Users, Star];
    return {
      ...stat,
      icon: icons[index]
    };
  });

  // Navigation handlers pour le modal de projet
  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const index = filteredImages.findIndex(img => img.id === selectedProject.id);
    const prevIndex = (index - 1 + filteredImages.length) % filteredImages.length;
    setSelectedProject(filteredImages[prevIndex]);
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const index = filteredImages.findIndex(img => img.id === selectedProject.id);
    const nextIndex = (index + 1) % filteredImages.length;
    setSelectedProject(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section supprimée */}
      {/* <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Crown className="w-5 h-5 mr-2" style={{color: '#32B8F1'}} />
              <span className="text-white font-medium">30 ans d&apos;excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos 
              <br />
              <span style={{color: '#32B8F1'}}>réalisations</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Découvrez notre portfolio de projets d&apos;enseignes réalisés avec excellence et savoir-faire à travers Montréal.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('achievements.page.portfolio.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('achievements.page.portfolio.subtitle')}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setCurrentFilter(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  currentFilter === category
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
                style={currentFilter === category ? {backgroundColor: '#32B8F1'} : {}}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-12">
            {paginatedImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                {t('achievements.page.portfolio.navigation.previous')}
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + Math.max(1, currentPage - 2);
                  if (page > totalPages) return null;
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg ${
                        currentPage === page
                          ? 'text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                      style={currentPage === page ? {backgroundColor: '#32B8F1'} : {}}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                {t('achievements.page.portfolio.navigation.next')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('achievements.page.recognition.title')}</h2>
            <p className="text-lg text-gray-300">{t('achievements.page.recognition.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.raw('achievements.page.recognition.awards').map((award: any, index: number) => {
              const icons = [Award, Star, Crown];
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                    {React.createElement(icons[index], { className: "w-8 h-8 text-yellow-400" })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800" style={{background: 'linear-gradient(135deg, #32B8F1 0%, #1578a9 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('achievements.page.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('achievements.page.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              {t('achievements.page.cta.requestQuote')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              {t('achievements.page.cta.viewServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                aria-label="Fermer les détails du projet"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={handlePrevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                aria-label="Image précédente"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                aria-label="Image suivante"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
              <div className="aspect-video relative">
                <Image
                  src={selectedProject.src}
                  alt={selectedProject.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.alt}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="mr-4">{t('achievements.page.portfolio.projectDetails.location')}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2024</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{t('achievements.page.portfolio.projectDetails.description')}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('achievements.page.portfolio.projectDetails.features')}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                  {t.raw('achievements.page.portfolio.projectDetails.featuresList').map((feature: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300"
                  style={{backgroundColor: '#32B8F1'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1578a9'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32B8F1'}
                >
                  {t('achievements.page.portfolio.projectDetails.requestQuote')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl transform transition-all">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">{t('achievements.page.contactModal.title')}</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fermer le modal"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">{t('achievements.page.contactModal.subtitle')}</p>
            
            {/* Form Content */}
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('achievements.page.contactModal.form.fullName')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={t('achievements.page.contactModal.form.fullNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('achievements.page.contactModal.form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={t('achievements.page.contactModal.form.emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('achievements.page.contactModal.form.phone')}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={t('achievements.page.contactModal.form.phonePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('achievements.page.contactModal.form.company')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={t('achievements.page.contactModal.form.companyPlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('achievements.page.contactModal.form.service')}
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    aria-label={t('achievements.page.contactModal.form.service')}
                  >
                    <option value="">{t('achievements.page.contactModal.form.servicePlaceholder')}</option>
                    <option value="enseignes-led">{t('achievements.page.contactModal.form.serviceOptions.ledSigns')}</option>
                    <option value="enseignes-vitrine">{t('achievements.page.contactModal.form.serviceOptions.windowSigns')}</option>
                    <option value="pylones">{t('achievements.page.contactModal.form.serviceOptions.pylons')}</option>
                    <option value="mural">{t('achievements.page.contactModal.form.serviceOptions.wall')}</option>
                    <option value="bannieres">{t('achievements.page.contactModal.form.serviceOptions.banners')}</option>
                    <option value="installation">{t('achievements.page.contactModal.form.serviceOptions.installation')}</option>
                    <option value="maintenance">{t('achievements.page.contactModal.form.serviceOptions.maintenance')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('achievements.page.contactModal.form.projectDetails')}
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder={t('achievements.page.contactModal.form.projectDetailsPlaceholder')}
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('achievements.page.contactModal.form.cancel')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('achievements.page.contactModal.form.send')}
                  </button>
                </div>
              </form>
              
              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (514) 322-2069</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>enseignesmediaprint@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage;