package test;

#if (kha_windows || kha_linux || kha_osx)
@:headerCode('#include <Test.h>')
#end

class Test {
	#if (kha_windows || kha_linux || kha_osx)
	@:functionCode('TwodgeMouse::test();')
	public static function test():Void {}
	#else
	public static inline function test():Void {

	}
	#end
}