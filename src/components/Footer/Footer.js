import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={classes.list}>
        <ul>
          <li>
            <a href="https://about.instagram.com/">&bull; About</a>
          </li>
          <li>
            <a href="https://help.instagram.com/">&bull; Help</a>
          </li>
          <li>
            <a href="https://about.instagram.com/en_US/blog">&bull; Press</a>
          </li>
          <li>
            <a href="https://developers.facebook.com/docs/instagram">
              &bull; API
            </a>
          </li>
          <li>
            <a href="https://about.instagram.com/about-us/careers">
              &bull; Jobs
            </a>
          </li>
          <li>
            <a href="https://help.instagram.com/519522125107875">
              &bull; Privacy
            </a>
          </li>
          <li>
            <a href="https://help.instagram.com/581066165581870">
              &bull; Terms
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/locations/">
              &bull; Locations
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/directory/profiles/">
              &bull; Top Accounts
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/directory/hashtags/">
              &bull; Hashtags
            </a>
          </li>
          <li>
            <a href="#">&bull; Language</a>
          </li>
        </ul>
      </div>
      <div className={classes.copy}>
        <p> &copy; 2021 INSTAGRAM CLONE FROM ME</p>
      </div>
    </div>
  );
};

export default Footer;
