<template>
  <footer>
    <div class="profile">
      <div>
        <img class="profile_media" src="~/assets/gopher.png" />
      </div>
      <div>
        <p class="profile_name">pon</p>
        <div class="line"></div>
        <p class="profile_body">
          Software Engineer & Gopher in Tokyo. Writes Go / Python / Rust.
          Interested in Design / Algorism / Image Processing / NLP / Contaier.
          Graduated Nagoya Univ (Physics).
        </p>
      </div>
    </div>
    <div class="sns">
      <svg width="35" height="35" viewBox="0 0 25 25">
        <path
          d="M21.725 5.338c-.744.47-1.605.804-2.513 1.006a3.978 3.978 0 0 0-2.942-1.293c-2.22 0-4.02 1.81-4.02 4.02 0 .32.034.63.07.94-3.31-.18-6.27-1.78-8.255-4.23a4.544 4.544 0 0 0-.574 2.01c.04 1.43.74 2.66 1.8 3.38-.63-.01-1.25-.19-1.79-.5v.08c0 1.93 1.38 3.56 3.23 3.95-.34.07-.7.12-1.07.14-.25-.02-.5-.04-.72-.07.49 1.58 1.97 2.74 3.74 2.8a8.49 8.49 0 0 1-5.02 1.72c-.3-.03-.62-.04-.93-.07A11.447 11.447 0 0 0 8.88 21c7.386 0 11.43-6.13 11.414-11.414.015-.21.01-.38 0-.578a7.604 7.604 0 0 0 2.01-2.08 7.27 7.27 0 0 1-2.297.645 3.856 3.856 0 0 0 1.72-2.23"
          style="fill:#1d3152;fill-rule:evenodd"
        ></path>
      </svg>

      <svg width="35" height="35" viewBox="0 0 32.58 31.77">
        <path
          d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
          style="fill:#1d3152;fill-rule:evenodd"
        />
      </svg>
    </div>
    <p class="copyright">© 2020 pon / hiromu nakamura</p>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
.sns {
  margin: auto;
  padding: 12px;
  width: 120px;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

footer {
  padding: 64px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #00ffc4;
}

.line {
  width: 128px;
  border: 0.5px solid;
  margin: 4px 0px;
}

.profile {
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  &_name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  &_body {
    padding: 12px 0px;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1.8em;
  }
  &_media {
    width: 96px;
    border-radius: 50% 50% 50% 50%;
    margin-right: 32px;
  }
}

.copyright {
  text-align: center;
  font-size: 0.8rem;
}

@media screen and (max-width: 640px) {
  footer {
    padding: 12px;
  }
  .profile {
    width: 90%;
    &_media {
      width: 64px;
    }
    &_name {
      font-size: 1.4rem;
    }
  }
}
</style>
