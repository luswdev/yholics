hexo.extend.filter.register('before_generate', function() {
    hexo.locals.set('sortedPages', function() {
      return hexo.locals.get('pages').sort('-date');
    });
  });