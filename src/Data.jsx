import A from "./com/A";
import Ab from "./com/AB";
import Yz from "./com/BottomLine";
import D from "./com/D";
import G from "./com/G";
import H from "./com/H";
import Hletter from "./com/Hletter";
import I from "./com/I";
import Icom from "./com/Icom";
import Iletter from "./com/Iletter";
import K from "./com/K";
import Kerning from "./com/Kerning";
import Letter from "./com/Letter";
import N from "./com/N";
import Nletter from "./com/Nletter";
import O from "./com/O";
import Pletter from "./com/P";
import Qletter from "./com/Q";
import Eletter from "./com/TopLine";
import Tracking from "./com/Tracking";

const Data = [
  {
    show: <Icom />,
    title: "STEM",
    des: (
      <>
        A Stem is the main stroke of a letterform, which can also be known as a{" "}
        <span className="text-second">strok</span> .
      </>
    ),
  },
  {
    show: <Letter />,
    title: "SERIF",
    des: "A Serif is a stroke at the open ends of a letterform. Typefaces with these are Serif, while those without are Sans-Serif. The term comes from the Dutch word 'schreef,' meaning 'line.'",
  },
  {
    show: <Hletter />,
    title: "BAR",
    des: (
      <>
        The Bar of a letterform is the horizontal stroke that goes across the
        middle of an uppercase A or H and the stroke that goes under the{" "}
        <span className="text-second">Eye</span> of a lowercase `e`. The bar
        can also be known as a crossbar.
      </>
    ),
  },
  {
    show: <A />,
    title: "FOOT",
    des: (
      <>
        The Foot of a letterform usually appears on most Serif typefaces and is
        the part of the Stem that rests on the Baseline.
      </>
    ),
  },
  {
    show: <I />,
    title: "TERMINAL",
    des: (
      <>
        A Terminal is the end of any Stroke that doesn’t include a Serif, but
        instead includes ball terminals and finials (curved or tapered in
        shape).
      </>
    ),
  },
  {
    show: <N />,
    title: "APERTURE",
    des: (
      <>
        Aperture is similar to a Counter but has an opening instead of being
        fully enclosed. The letters ‘n’, ‘c’, ‘s’ and ‘e’ all have an aperture.
      </>
    ),
  },
  {
    show: <Kerning />,
    title: "Kerning",
    des: (
      <>
        Kerning, not to be confused with Tracking, is the horizontal spacing
        between two consecutive letters which you can manually adjust to add
        negative space or to take it away.
      </>
    ),
  },
  {
    show: <Iletter />,
    title: "TITTLE",
    des: (
      <>
        The Tittle, otherwise known as a “dot”, is a small distinguishing mark,
        such as an diacritic on a lowercase ‘i’ or ‘j’.
      </>
    ),
  },
  {
    show: <H />,
    title: "SHOULDER",
    des: (
      <>
        Counters are found in letters that have enclosed or partially enclosed
        areas of white space. Letters such as ‘a’, ‘b’, ‘d’, ‘e’, ‘g’, ‘o’, ‘p’
        and ‘q’. The letter ‘e’ has its own special name for its counter; the
        Eye.
      </>
    ),
  },
  {
    show: <O />,
    title: "COUNTER",
    des: (
      <>
        Counters are found in letters that have enclosed or partially enclosed
        areas of white space. Letters such as ‘a’, ‘b’, ‘d’, ‘e’, ‘g’, ‘o’, ‘p’
        and ‘q’. The letter ‘e’ has its own special name for its counter; the
        Eye.
      </>
    ),
  },
  {
    show: <K />,
    title: "ASCENDER",
    des: (
      <>
        The Shoulder of a letterform is the curved stroke extending down from a
        Stem. Lowercase letters such as ‘m’, ‘n’ and ‘h’ all have a Shoulder.
      </>
    ),
  },
  {
    show: <D />,
    title: "BOWL",
    des: (
      <>
        The curved part of the character that encloses a Counter of letters such
        as ‘d’, ‘b’, ‘o’, ‘g’, and a is known as the Bowl of the letterform. The
        curved strokes of a ‘c’ are sometimes also referred to as bowls although
        they aren’t closed.
      </>
    ),
  },
  {
    show: <G />,
    title: "EAR",
    des: (
      <>
        Typically found on a lower case ‘g’, an Ear is a decorative flourish
        that usually appears on the upper right side of the Bowl.
      </>
    ),
  },
  {
    show: <Pletter />,
    title: "DESCENDER",
    des: (
      <>
       
Descenders extend below the Baseline, unlike Ascenders, which rise above the X-Height. Letters like g, j, p, q, and y have descenders, while most uppercase letters do not.
      </>
    ),
  },
  {
    show: <Qletter />,
    title: "TAIL",
    des: (
      <>
        A Tail is often a decorative Stroke on the letter ‘Q’, ‘K’ or ‘R’. The
        Descender on ‘g’, ‘j’, ‘p’, ‘q’, and ‘y’ are also known as Tails.
      </>
    ),
  },
  {
    show: <Eletter />,
    title: "CAP-HEIGHT",
    des: (
      <>
        Sometimes referred to as the Cap Line, the Cap-Height is the invisible
        line that marks the upper boundary of capital letters and some lowercase
        letters with Ascenders.
      </>
    ),
  },
  {
    show: <Ab />,
    title: "X-HEIGHT",
    des: (
      <>
        The X-Height is the height of a typeface’s lowercase letters
        (disregarding ascenders and descenders) that rest on the Baseline.
      </>
    ),
  },
  {
    show: <Yz />,
    title: "BASELINE",
    des: (
      <>
        The Baseline is the imaginary line on which most letters and other
        characters sit. Descenders usually rest on the Baseline, but part of the
        letterform sits below the imaginary line.
      </>
    ),
  },
  {
    show: <Nletter />,
    title: "STROKE",
    des: (
      <>
     A Stroke is a diagonal part of a letterform, as in ‘N’, ‘M’, and ‘Y’. In letters like ‘A’ or ‘V’, the near-vertical line is the stem, and the other diagonal is the stroke. Bars, Arms, and Bowls are also types of strokes.
      </>
    ),
  },
  {
    show: <Tracking />,
    title: "TRACKING",
    des: (
      <>
        Tracking, otherwise known as letter-spacing, is similar to
        Kerning but affects the spacing
        between characters in a complete section of text instead of between only
        two consecutive characters.
      </>
    ),
  },
];
export default Data;
