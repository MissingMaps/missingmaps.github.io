# Graciously borrowed from:
# https://github.com/nicoespeon/nicoespeon.github.io/blob/develop/_plugins/i18n_filter.rb
# -- and fixed for 2.3 by using --
# https://github.com/gacha/gacha.id.lv/blob/master/_plugins/i18n_filter.rb

require 'i18n'

I18n.enforce_available_locales = false

LOCALE = Jekyll.configuration({})['default_locale'] # set your locale from config var

# Create folder "_locales" and put some locale file from https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale
module Jekyll
  module I18nFilter
    # Example:
    #   {{ post.date | localize: "%d.%m.%Y" }}
    #   {{ post.date | localize: ":short" }}
    def localize(input, format=nil, locale=LOCALE)
      load_translations(locale)
      format = (format =~ /^:(\w+)/) ? $1.to_sym : format
      I18n.l input, :format => format
    rescue
      "error"
    end

    def load_translations(loc)
      if I18n.backend.send(:translations).empty?
        I18n.backend.load_translations Dir[File.join(File.dirname(__FILE__),'../_locales/*.yml')]

      end
      I18n.locale = loc
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nFilter)
