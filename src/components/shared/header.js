import { h } from "hyperapp";

function Header({ showLoading }) {
  return (
    <div class="header">
      <h1>
        <a href="/">Podcaster</a>
        <div class={`spinner ${showLoading ? '' : 'hidden'}`}>
          <div class="double-bounce1" />
          <div class="double-bounce2" />
        </div>
      </h1>
    </div>
  );
}

export default Header;
