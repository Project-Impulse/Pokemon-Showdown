





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-49f1e970452082ece91a8cb77754f31a769167f4f9cd527a501b1cafa52bb1b6.css" integrity="sha256-SfHpcEUgguzpGoy3d1TzGnaRZ/T5zVJ6UBscr6UrsbY=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ce3ebe5d1dd355f0392e6e28517d527ed818deb403150d4e1d697f4642222988.css" integrity="sha256-zj6+XR3TVfA5Lm4oUX1SftgY3rQDFQ1OHWl/RkIiKYg=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>Showdown-Boilerplate/misc.js at master · Project-Impulse/Showdown-Boilerplate</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/29394171?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Project-Impulse/Showdown-Boilerplate" property="og:title" /><meta content="https://github.com/Project-Impulse/Showdown-Boilerplate" property="og:url" /><meta content="Showdown-Boilerplate - Pokémon battle simulator private server template." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTgwNTExODg1OmRkMmIyOGY1M2M3NzU0Y2Y2YTJjMTJmZDBiZTNkNTIyYjhjMDE4ZDE5ZDRmZDBmZjU2OTk3Mzg0MDdlYmM3MmU=--89b3154f8ff0b1e4d340e342b1eb4e9e3f95e8d5">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="A165:59E1:CBE220:1201D10:593FE843" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="A165:59E1:CBE220:1201D10:593FE843" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="29394171" name="octolytics-actor-id" /><meta content="Project-Impulse" name="octolytics-actor-login" /><meta content="6908d70b75808c8fb432b82589f99545f8dab9bd1c6883f12cd0c831b747fa47" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension3" content="desktop">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="Project-Impulse">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NzIyYjE2NjZkZTA4NzMyZmMwZTIxNjI2ZGQ2YjcyYWU4MGRkZDRhMjg2OTk1YTZiOWQ5NjQ0ZDdhMTNiOTJkZnx7InJlbW90ZV9hZGRyZXNzIjoiNDkuMTQuMTk0LjE0NyIsInJlcXVlc3RfaWQiOiJBMTY1OjU5RTE6Q0JFMjIwOjEyMDFEMTA6NTkzRkU4NDMiLCJ0aW1lc3RhbXAiOjE0OTczNjA0NTIsImhvc3QiOiJnaXRodWIuY29tIn0=">


  <meta name="html-safe-nonce" content="5bd4f17b4e38404d6195087f9370698552734e5a">

  <meta http-equiv="x-pjax-version" content="3146605a6954d9770b328ee7b9d1a325">
  

      <link href="https://github.com/Project-Impulse/Showdown-Boilerplate/commits/master.atom" rel="alternate" title="Recent Commits to Showdown-Boilerplate:master" type="application/atom+xml">

  <meta name="description" content="Showdown-Boilerplate - Pokémon battle simulator private server template.">
  <meta name="go-import" content="github.com/Project-Impulse/Showdown-Boilerplate git https://github.com/Project-Impulse/Showdown-Boilerplate.git">

  <meta content="29394171" name="octolytics-dimension-user_id" /><meta content="Project-Impulse" name="octolytics-dimension-user_login" /><meta content="94175220" name="octolytics-dimension-repository_id" /><meta content="Project-Impulse/Showdown-Boilerplate" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="19435104" name="octolytics-dimension-repository_parent_id" /><meta content="CreaturePhil/Showdown-Boilerplate" name="octolytics-dimension-repository_parent_nwo" /><meta content="19435104" name="octolytics-dimension-repository_network_root_id" /><meta content="CreaturePhil/Showdown-Boilerplate" name="octolytics-dimension-repository_network_root_nwo" /><meta content="true" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/Project-Impulse/Showdown-Boilerplate/blob/master/chat-plugins/misc.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    

      <div class="mobile-banner">
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/site/mobile_preference" class="js-mobile-preference-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cZuB+bk20yaPdouKdArFgTr1A1FKIdVCFeVCVc3LvpsoPex4XXHEND/6P/Ys8zVdao1gjhpCWfDbI9nC8No1Iw==" /></div>
          <input type="hidden" name="mobile" value="true">
          <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

          <button type="submit" class="switch-to-mobile" data-ga-click="Mobile, switch to mobile, switch button">
            <svg aria-hidden="true" class="octicon octicon-device-mobile" height="64" version="1.1" viewBox="0 0 10 16" width="40"><path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"/></svg>
            Switch to mobile version
          </button>
</form>      </div>


        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/search" class="js-site-search-form" data-scoped-search-url="/Project-Impulse/Showdown-Boilerplate/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/Project-Impulse/Showdown-Boilerplate/blob/master/chat-plugins/misc.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
            <li class="header-nav-item">
              <a href="/marketplace" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                Marketplace
</a>            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>




      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Project-Impulse"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Project-Impulse" class="avatar" src="https://avatars2.githubusercontent.com/u/29394171?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">Project-Impulse</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/Project-Impulse" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/Project-Impulse?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AWV0si0XbOYZHmBVNFjqPwFchdW4Tx0mi4dz08iQXtnDI/t0lHasWQ0bfjYMPPfzbDIBDnBpgGjC0Nbvs0jZbg==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+NnZUj5pF21uIzZBQZVvik10XyyReXsIOOEnzi1DZ1E6n1aUhwjX0nomKCJ58XJGIBrb91lf5kZxtoLyVpvg5g==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


    
        



      



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9LFz5FN5TC4tdB7+/5g4EY26eCBt3qpF1VSZbIAYMICdbgs+tdfnAuRagQ9dlMCf14h3PyQvmHd4TfH6jSAxFQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="94175220" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Project-Impulse/Showdown-Boilerplate/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/Project-Impulse/Showdown-Boilerplate/watchers"
              aria-label="0 users are watching this repository">
              0
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LbJt5FE028YCqN0b0IDcJvHfV5roi/XhLBsh1pniukc9bSiEXhVb8ZFeTjlSECi1GdjLdUn82NZrBGkL1Wvfxg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Project-Impulse/Showdown-Boilerplate"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Project-Impulse/Showdown-Boilerplate/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nTKBlyqECWHDHRRJrZLyrRWKwfjavZuFjaglFmGPHqK9y7j9p9psQeqdXcqSRRJaitJx2IbSrKvoJkvALw9UrA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Project-Impulse/Showdown-Boilerplate"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/Project-Impulse/Showdown-Boilerplate/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0Xe8SwjSotSWqUGNRxANkRZB6kTb6mMtXkaB7Ir25mfNx1ZhcREO76cHxrri1g56bKafuldArr0+K9Izte8InA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Project-Impulse/Showdown-Boilerplate to your account"
                aria-label="Fork your own copy of Project-Impulse/Showdown-Boilerplate to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/Project-Impulse/Showdown-Boilerplate/network" class="social-count"
       aria-label="185 users forked this repository">
      185
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author" itemprop="author"><a href="/Project-Impulse" class="url fn" rel="author">Project-Impulse</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Project-Impulse/Showdown-Boilerplate" data-pjax="#js-repo-pjax-container">Showdown-Boilerplate</a></strong>

    <span class="fork-flag">
      <span class="text">forked from <a href="/CreaturePhil/Showdown-Boilerplate">CreaturePhil/Showdown-Boilerplate</a></span>
    </span>
</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Project-Impulse/Showdown-Boilerplate" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Project-Impulse/Showdown-Boilerplate" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Project-Impulse/Showdown-Boilerplate/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Project-Impulse/Showdown-Boilerplate/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/Project-Impulse/Showdown-Boilerplate/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Project-Impulse/Showdown-Boilerplate/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/Project-Impulse/Showdown-Boilerplate/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Project-Impulse/Showdown-Boilerplate/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
      <a href="/Project-Impulse/Showdown-Boilerplate/settings" class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations /Project-Impulse/Showdown-Boilerplate/settings">
        <svg aria-hidden="true" class="octicon octicon-gear" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
        Settings
</a>
    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/Project-Impulse/Showdown-Boilerplate/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/Project-Impulse/Showdown-Boilerplate/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
        
  <a href="/Project-Impulse/Showdown-Boilerplate/blob/49bd2e4826ac8090e62fc4ea4aa78d8eeec53b67/chat-plugins/misc.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:b5f13aef0e6779fb1c997c34f5834654 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Project-Impulse/Showdown-Boilerplate/blob/bj/chat-plugins/misc.js"
               data-name="bj"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bj
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Project-Impulse/Showdown-Boilerplate/blob/eosdb/chat-plugins/misc.js"
               data-name="eosdb"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                eosdb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Project-Impulse/Showdown-Boilerplate/blob/master/chat-plugins/misc.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Project-Impulse/Showdown-Boilerplate/blob/origindb/chat-plugins/misc.js"
               data-name="origindb"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                origindb
              </span>
            </a>
        </div>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EQSC+1Jrak3M+huMhQ8U/Rgp74v0SZ5quuO3HIISIG2R37aNTnsOT3pmd7fUARyYupjwokCgYjRZrCNL6ELg0Q==" /></div>
          <svg aria-hidden="true" class="octicon octicon-git-branch select-menu-item-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master">
            <input type="hidden" name="path" id="path" value="chat-plugins/misc.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/3.0.0/chat-plugins/misc.js"
              data-name="3.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.0">
                3.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/2.2.1/chat-plugins/misc.js"
              data-name="2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.1">
                2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/2.2.0/chat-plugins/misc.js"
              data-name="2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.0">
                2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/2.1.0/chat-plugins/misc.js"
              data-name="2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0">
                2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/2.0.0/chat-plugins/misc.js"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/1.2.0/chat-plugins/misc.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/1.1.0/chat-plugins/misc.js"
              data-name="1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.0">
                1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Project-Impulse/Showdown-Boilerplate/tree/1.0.0/chat-plugins/misc.js"
              data-name="1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0.0">
                1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/Project-Impulse/Showdown-Boilerplate/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Project-Impulse/Showdown-Boilerplate"><span>Showdown-Boilerplate</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Project-Impulse/Showdown-Boilerplate/tree/master/chat-plugins"><span>chat-plugins</span></a></span><span class="separator">/</span><strong class="final-path">misc.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/Project-Impulse/Showdown-Boilerplate/commit/b9807c47e26ddbf27d06014eecc6aafc5185ba91" data-pjax>
          b9807c4
        </a>
        <relative-time datetime="2017-01-19T00:57:03Z">Jan 19, 2017</relative-time>
      </span>
      <div>
        <img alt="@CreaturePhil" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/5875574?v=3&amp;s=40" width="20" />
        <a href="/CreaturePhil" class="user-mention" rel="contributor">CreaturePhil</a>
          <a href="/Project-Impulse/Showdown-Boilerplate/commit/b9807c47e26ddbf27d06014eecc6aafc5185ba91" class="message" data-pjax="true" title="Replace origindb with nef">Replace origindb with nef</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>4</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="CreaturePhil" href="/Project-Impulse/Showdown-Boilerplate/commits/master/chat-plugins/misc.js?author=CreaturePhil"><img alt="@CreaturePhil" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/5875574?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="TheFenderStory" href="/Project-Impulse/Showdown-Boilerplate/commits/master/chat-plugins/misc.js?author=TheFenderStory"><img alt="@TheFenderStory" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/8406186?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="BlazingAura" href="/Project-Impulse/Showdown-Boilerplate/commits/master/chat-plugins/misc.js?author=BlazingAura"><img alt="@BlazingAura" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/12772951?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="aakashrajput" href="/Project-Impulse/Showdown-Boilerplate/commits/master/chat-plugins/misc.js?author=aakashrajput"><img alt="@aakashrajput" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/19830621?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@CreaturePhil" height="24" src="https://avatars2.githubusercontent.com/u/5875574?v=3&amp;s=48" width="24" />
            <a href="/CreaturePhil">CreaturePhil</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@TheFenderStory" height="24" src="https://avatars1.githubusercontent.com/u/8406186?v=3&amp;s=48" width="24" />
            <a href="/TheFenderStory">TheFenderStory</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@BlazingAura" height="24" src="https://avatars0.githubusercontent.com/u/12772951?v=3&amp;s=48" width="24" />
            <a href="/BlazingAura">BlazingAura</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@aakashrajput" height="24" src="https://avatars2.githubusercontent.com/u/19830621?v=3&amp;s=48" width="24" />
            <a href="/aakashrajput">aakashrajput</a>
          </li>
      </ul>
    </div>
  </div>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/Project-Impulse/Showdown-Boilerplate/raw/master/chat-plugins/misc.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/Project-Impulse/Showdown-Boilerplate/blame/master/chat-plugins/misc.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/Project-Impulse/Showdown-Boilerplate/commits/master/chat-plugins/misc.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/edit/master/chat-plugins/misc.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qfL5QkDPp52vgv+zDO/TG5oRXPworwAEiPm0Fc3v6TOHK0nL0Ot9F6ky4PONXDWsnYV7r0qba/DX5neS+S9fHA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Project-Impulse/Showdown-Boilerplate/delete/master/chat-plugins/misc.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="KsUa2Ikbb1wnQgUfHoREgMjuxOwBWTanoaT/LXBzk0br+qlWMdDIcPhnaTRVrOUp6NELWLfKL8nCWPI/uDdGGA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      271 lines (234 sloc)
      <span class="file-info-divider"></span>
    9.68 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Miscellaneous commands</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*eslint no-restricted-modules: [0]*/</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">let</span> moment <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>moment<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">let</span> request <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>request<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">let</span> messages <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>has vanished into nothingness!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>used Explosion!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>fell into the void.<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>went into a cave without a repel!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>has left the building.<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>was forced to give StevoDuhHero&#39;s mom an oil massage!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>was hit by Magikarp&#39;s Revenge!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>ate a bomb!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>is blasting off again!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>(Quit: oh god how did this get here i am not good with computer)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>was unfortunate and didn&#39;t get a cool message.<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&quot;</span>{{user}}&#39;s mama accidently kicked {{user}} from the server!<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">];</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">clearRoom</span>(<span class="pl-smi">room</span>) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">let</span> len <span class="pl-k">=</span> (<span class="pl-smi">room</span>.<span class="pl-smi">log</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">room</span>.<span class="pl-smi">log</span>.<span class="pl-c1">length</span>) <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">let</span> users <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">while</span> (len<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-smi">log</span>[len] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span> (<span class="pl-k">let</span> u <span class="pl-k">in</span> <span class="pl-smi">room</span>.<span class="pl-smi">users</span>) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">users</span>.<span class="pl-c1">push</span>(u);</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Users</span>.<span class="pl-c1">get</span>(u).<span class="pl-en">leaveRoom</span>(room, <span class="pl-smi">Users</span>.<span class="pl-c1">get</span>(u).<span class="pl-smi">connections</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">	len <span class="pl-k">=</span> <span class="pl-smi">users</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">while</span> (len<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Users</span>.<span class="pl-c1">get</span>(users[len]).<span class="pl-en">joinRoom</span>(room, <span class="pl-smi">Users</span>.<span class="pl-c1">get</span>(users[len]).<span class="pl-smi">connections</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">	}, <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">exports</span>.<span class="pl-smi">commands</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">	stafflist<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>authority<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">	auth<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>authority<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">	authlist<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>authority<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">authority</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>, <span class="pl-smi">connection</span>) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> rankLists <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> ranks <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(<span class="pl-smi">Config</span>.<span class="pl-smi">groups</span>);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">let</span> u <span class="pl-k">in</span> <span class="pl-smi">Users</span>.<span class="pl-smi">usergroups</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> rank <span class="pl-k">=</span> <span class="pl-smi">Users</span>.<span class="pl-smi">usergroups</span>[u].<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> In case the usergroups.csv file is not proper, we check for the server ranks.</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">ranks</span>.<span class="pl-c1">indexOf</span>(rank) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> name <span class="pl-k">=</span> <span class="pl-smi">Users</span>.<span class="pl-smi">usergroups</span>[u].<span class="pl-c1">substr</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>rankLists[rank]) rankLists[rank] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (name) rankLists[rank].<span class="pl-c1">push</span>(((<span class="pl-smi">Users</span>.<span class="pl-en">getExact</span>(name) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Users</span>.<span class="pl-en">getExact</span>(name).<span class="pl-smi">connected</span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>**<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>**<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> name));</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> buffer <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(rankLists).<span class="pl-c1">sort</span>(<span class="pl-k">function</span> (<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (<span class="pl-smi">Config</span>.<span class="pl-smi">groups</span>[b] <span class="pl-k">||</span> {rank<span class="pl-k">:</span> <span class="pl-c1">0</span>}).<span class="pl-smi">rank</span> <span class="pl-k">-</span> (<span class="pl-smi">Config</span>.<span class="pl-smi">groups</span>[a] <span class="pl-k">||</span> {rank<span class="pl-k">:</span> <span class="pl-c1">0</span>}).<span class="pl-smi">rank</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">		}).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span> (<span class="pl-smi">r</span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">buffer</span>.<span class="pl-c1">push</span>((<span class="pl-smi">Config</span>.<span class="pl-smi">groups</span>[r] <span class="pl-k">?</span> r <span class="pl-k">+</span> <span class="pl-smi">Config</span>.<span class="pl-smi">groups</span>[r].<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>s (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> rankLists[r].<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> r) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> rankLists[r].<span class="pl-c1">sort</span>().<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">buffer</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">connection</span>.<span class="pl-en">popup</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>This server has no auth.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">connection</span>.<span class="pl-en">popup</span>(<span class="pl-smi">buffer</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n\n</span><span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">clearall</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>declare<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-smi">battle</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot clearall in battle rooms.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">clearRoom</span>(room);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">	gclearall<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>globalclearall<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">globalclearall</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>gdeclare<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">let</span> u <span class="pl-k">in</span> <span class="pl-smi">Users</span>.<span class="pl-smi">users</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Users</span>.<span class="pl-smi">users</span>[u].<span class="pl-en">popup</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>All rooms are being clear.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Rooms</span>.<span class="pl-smi">rooms</span>.<span class="pl-c1">forEach</span>(clearRoom);</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">hide</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lock<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">user</span>.<span class="pl-smi">hiding</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">user</span>.<span class="pl-en">updateIdentity</span>();</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You have hidden your staff symbol.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">	rk<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>kick<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">	roomkick<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>kick<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">kick</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help kick<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">canTalk</span>() <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bypassall<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot do this while unable to talk.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">		target <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">splitTarget</span>(target);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> targetUser <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUser</span>;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>targetUser <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">targetUser</span>.<span class="pl-smi">connected</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>User <span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUsername</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> not found.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>mute<span class="pl-pds">&#39;</span></span>, targetUser, room)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">addModCommand</span>(<span class="pl-smi">targetUser</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> was kicked from the room by <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">targetUser</span>.<span class="pl-en">popup</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You were kicked from <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">room</span>.<span class="pl-c1">id</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> by <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">targetUser</span>.<span class="pl-en">leaveRoom</span>(<span class="pl-smi">room</span>.<span class="pl-c1">id</span>);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">	kickhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/kick - Kick a user out of a room. Requires: % @ # &amp; ~<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">	masspm<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pmall<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">pmall</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>pmall<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help pmall<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> pmName <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> Server PM [Do not reply]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Users</span>.<span class="pl-smi">users</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span> (<span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> message <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|pm|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pmName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-en">getIdentity</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> target;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">user</span>.<span class="pl-c1">send</span>(message);</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">	pmallhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/pmall [message] - PM all users in the server.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">	staffpm<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pmallstaff<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">	pmstaff<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pmallstaff<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">pmallstaff</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>forcewin<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help pmallstaff<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> pmName <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> Staff PM [Do not reply]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Users</span>.<span class="pl-smi">users</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span> (<span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-smi">isStaff</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> message <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|pm|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> pmName <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-en">getIdentity</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> target;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">user</span>.<span class="pl-c1">send</span>(message);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">	pmallstaffhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/pmallstaff [message] - Sends a PM to every staff member online.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">	d<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>poof<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">	cpoof<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>poof<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">poof</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">Config</span>.<span class="pl-smi">poofOff</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Poof is currently disabled.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (target <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>broadcast<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">room</span>.<span class="pl-c1">id</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>lobby<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> message <span class="pl-k">=</span> target <span class="pl-k">||</span> messages[<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-smi">messages</span>.<span class="pl-c1">length</span>)];</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">message</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>{{user}}<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) message <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{{user}} <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> message;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">		message <span class="pl-k">=</span> <span class="pl-smi">message</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>{{user}}<span class="pl-pds">/</span>g</span>, <span class="pl-smi">user</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">canTalk</span>(message)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> colour <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> [<span class="pl-c1">1</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span>].<span class="pl-en">map</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> part <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">0xaa</span>);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (part <span class="pl-k">&lt;</span> <span class="pl-c1">0x10</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-smi">part</span>.<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		}).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">room</span>.<span class="pl-en">addRaw</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;strong&gt;&lt;font color=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> colour <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&gt;~~ <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(message) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> ~~&lt;/font&gt;&lt;/strong&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">user</span>.<span class="pl-en">disconnectAll</span>();</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">	poofhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/poof - Disconnects the user and leaves a message in the room.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">poofon</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>poofoff<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Config</span>.<span class="pl-smi">poofOff</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Poof is now enabled.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">	poofonhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/poofon - Enable the use /poof command.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">	nopoof<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>poofoff<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">poofoff</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>poofoff<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Config</span>.<span class="pl-smi">poofOff</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Poof is now disabled.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">	poofoffhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/poofoff - Disable the use of the /poof command.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">regdate</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">runBroadcast</span>()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-en">toId</span>(target)) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help regdate<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> username <span class="pl-k">=</span> <span class="pl-en">toId</span>(target);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">request</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>http://pokemonshowdown.com/users/<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> username, <span class="pl-k">function</span> (<span class="pl-smi">error</span>, <span class="pl-smi">response</span>, <span class="pl-smi">body</span>) {</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (error <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">response</span>.<span class="pl-smi">statusCode</span> <span class="pl-k">!==</span> <span class="pl-c1">200</span>) {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(<span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(target) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> is not registered.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">room</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> regdate <span class="pl-k">=</span> <span class="pl-smi">body</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;small&gt;<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>].<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/small&gt;<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(&lt;em&gt;<span class="pl-k">|</span>&lt;<span class="pl-cce">\/</span>em&gt;)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (regdate <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(Unregistered)<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(<span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(target) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> is not registered.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (regdate <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(Account disabled)<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(<span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(target) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;s account is disabled.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(<span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(target) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> was registered on <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">regdate</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">7</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">room</span>.<span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		}.<span class="pl-en">bind</span>(<span class="pl-c1">this</span>));</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">	regdatehelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/regdate - Please specify a valid username.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">show</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">can</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>lock<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">user</span>.<span class="pl-smi">hiding</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">user</span>.<span class="pl-en">updateIdentity</span>();</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You have revealed your staff symbol.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">	sb<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>showdownboilerplate<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">showdownboilerplate</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">runBroadcast</span>()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|raw|This server uses &lt;a href=&#39;https://github.com/CreaturePhil/Showdown-Boilerplate&#39;&gt;Showdown-Boilerplate&lt;/a&gt;.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">	showdownboilerplatehelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/showdownboilerplate - Links to the Showdown-Boilerplate repository on Github.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">seen</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">runBroadcast</span>()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help seen<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> targetUser <span class="pl-k">=</span> <span class="pl-smi">Users</span>.<span class="pl-c1">get</span>(target);</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (targetUser <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">targetUser</span>.<span class="pl-smi">connected</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(<span class="pl-smi">targetUser</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> is &lt;b&gt;currently online&lt;/b&gt;.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">		target <span class="pl-k">=</span> <span class="pl-smi">Chat</span>.<span class="pl-en">escapeHTML</span>(target);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> seen <span class="pl-k">=</span> <span class="pl-smi">Db</span>.<span class="pl-smi">seen</span>.<span class="pl-c1">get</span>(<span class="pl-en">toId</span>(target));</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>seen) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> has never been online on this server.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">sendReplyBox</span>(target <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> was last seen &lt;b&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">moment</span>(seen).<span class="pl-en">fromNow</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/b&gt;.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">	seenhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/seen - Shows when the user last connected on the server.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">tell</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">target</span>, <span class="pl-smi">room</span>, <span class="pl-smi">user</span>, <span class="pl-smi">connection</span>) {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help tell<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">		target <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">splitTarget</span>(target);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> targetUser <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUser</span>;</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>target) {</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">sendReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You forgot the comma.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/help tell<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (targetUser <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">targetUser</span>.<span class="pl-smi">connected</span>) {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">parse</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/pm <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUsername</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> target);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">user</span>.<span class="pl-smi">locked</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You may not send offline messages when locked.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">target</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">255</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Your message is too long to be sent as an offline message (&gt;255 characters).<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">Config</span>.<span class="pl-smi">tellrank</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>autoconfirmed<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">user</span>.<span class="pl-smi">autoconfirmed</span>) {</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You must be autoconfirmed to send an offline message.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">Config</span>.<span class="pl-smi">tellrank</span> <span class="pl-k">||</span> <span class="pl-smi">Config</span>.<span class="pl-smi">groupsranking</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">user</span>.<span class="pl-smi">group</span>) <span class="pl-k">&lt;</span> <span class="pl-smi">Config</span>.<span class="pl-smi">groupsranking</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">Config</span>.<span class="pl-smi">tellrank</span>)) {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You cannot send an offline message because offline messaging is <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">				(<span class="pl-k">!</span><span class="pl-smi">Config</span>.<span class="pl-smi">tellrank</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>disabled<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>only available to users of rank <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Config</span>.<span class="pl-smi">tellrank</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> and above<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> userid <span class="pl-k">=</span> <span class="pl-en">toId</span>(<span class="pl-c1">this</span>.<span class="pl-smi">targetUsername</span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">userid</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">18</span>) <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUsername</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span> is not a legal username.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> sendSuccess <span class="pl-k">=</span> <span class="pl-smi">Tells</span>.<span class="pl-en">addTell</span>(user, userid, target);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>sendSuccess) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (sendSuccess <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>User <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUsername</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> has too many offline messages queued.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">popupReply</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>You have too many outgoing offline messages queued. Please wait until some have been received or have expired.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">connection</span>.<span class="pl-c1">send</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>|pm|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">user</span>.<span class="pl-en">getIdentity</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>|<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">			(targetUser <span class="pl-k">?</span> <span class="pl-smi">targetUser</span>.<span class="pl-en">getIdentity</span>() <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">targetUsername</span>) <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&quot;</span>|/text This user is currently offline. Your message will be delivered when they are next online.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">	tellhelp<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/tell [username], [message] - Send a message to an offline user that will be received when they log in.<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</table>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>






    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.31495s from github-fe155-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-c3IPAnuzF/zrEYwlknXaS+Xvo0TCRqEjQaaMMWjO6qc=" src="https://assets-cdn.github.com/assets/frameworks-73720f027bb317fceb118c259275da4be5efa344c246a12341a68c3168ceeaa7.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-63ujH2YZ6SQPi1t/0ZvpBaLhOEN2PvS+eKGSM/mCUTk=" src="https://assets-cdn.github.com/assets/github-eb7ba31f6619e9240f8b5b7fd19be905a2e13843763ef4be78a19233f9825139.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

