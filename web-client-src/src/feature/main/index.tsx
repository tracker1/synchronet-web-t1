import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { App } from "../app";
import { PagePaper } from "../components/PagePaper";
import { Counter } from "../counter/Counter";

export const MainSection = () => {
  return (
    <App title="Main">
      <Container>
        <PagePaper elevation={5}>
          <MainContent />
        </PagePaper>
        <Counter />
      </Container>
    </App>
  );
}

function MainContent() {
  return (
    <>
      <h1>Roughneck BBS</h1>
      <p>
        A new web interface is in progress. For now, you can
        use one of the existing web interfaces...
      </p>

      <ul>
        <li><Link href="https://ecweb.roughneckbbs.com/">ecweb4 (modern)</Link></li>
        <li><Link href="https://rmweb.roughneckbbs.com/">Runemaster (legacy)</Link></li>
      </ul>

      <h2>Other services:</h2>
      <p>Other services are exposed on the default ports.</p>

      <h3>Terminal BBS Connections</h3>
      <ul>
        <li>TELNET: <code>host.roughneckbbs.com:23</code></li>
        <li>SSH: <code>host.roughneckbbs.com:22</code></li>
        <li>RLOGIN: <code>host.roughneckbbs.com:513</code></li>
        <li>PETSCII 40-Column: <code>host.roughneckbbs.com:64</code></li>
        <li>PETSCII 80-Column: <code>host.roughneckbbs.com:128</code></li>
      </ul>

      <h3>Mail:</h3>
      <ul>
        <li>SMTP+TLS: <code>mail.roughneckbbs.com:465</code></li>
        <li>POP3+TLS: <code>mail.roughneckbbs.com:995</code></li>
      </ul>

      <h3>News</h3>
      <ul>
        <li>NNPT+TLS: <code>news.roughneckbbs.com:563</code></li>
      </ul>

      <h3>Chat</h3>
      <ul>
        <li>IRC: <code>irc.roughneckbbs.com:6667</code></li>
        <li>IRC+TLS: <code>irc.roughneckbbs.com:6697</code></li>
      </ul>

      <h3>Files</h3>
      <ul>
        <li>FTP: <code>files.roughneckbbs.com:21</code></li>
        <li>SFTP: <code>files.roughneckbbs.com:22</code></li>
      </ul>
    </>
  )
}