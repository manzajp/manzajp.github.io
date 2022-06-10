import 'package:flutter/material.dart';

class StatefulDragArea extends StatefulWidget {
  final Widget child;

  const StatefulDragArea({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  State<StatefulDragArea> createState() => _StatefulDragAreaState();
}

class _StatefulDragAreaState extends State<StatefulDragArea> {
  final Size windowSize = MediaQueryData.fromWindow(WidgetsBinding.instance.window).size;
  late Offset screenOffset = Offset(windowSize.width / 2, windowSize.height / 2);
  late Offset position = screenOffset;
  double prevScale = 1;
  double scale = 1;

  void updateScale(double zoom) => setState(() => scale = prevScale * zoom);
  void commitScale() => setState(() => prevScale = scale);
  void updatePosition(Offset newPosition) => setState(() => position = newPosition);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onScaleUpdate: (details) => updateScale(details.scale),
      onScaleEnd: (_) => commitScale(),
      child: Stack(
        children: [
          // Positioned.fill(child: Container(color: Colors.amber.withOpacity(.4))),
          Positioned(
            left: position.dx,
            top: position.dy,
            child: Draggable(
              maxSimultaneousDrags: 1,
              feedback: widget.child,
              childWhenDragging: Container(),
              // childWhenDragging: Opacity(
              //   opacity: .3,
              //   child: widget.child,
              // ),
              onDragEnd: (details) => updatePosition(details.offset),
              child: Transform.scale(
                scale: scale,
                child: widget.child,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
